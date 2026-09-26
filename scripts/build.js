#!/usr/bin/env node
/**
 * Pembungkus `ng build` yang tahan terhadap versi Node.
 *
 * ── Masalahnya ────────────────────────────────────────────────────────────
 *
 * Angular 12 memakai webpack 5, yang secara bawaan menghitung hash dengan
 * md4. Node 17 ke atas dibangun di atas OpenSSL 3, dan OpenSSL 3 mencabut md4
 * dari penyedia bawaannya. Akibatnya build berhenti dengan:
 *
 *   Error: error:0308010C:digital envelope routines::unsupported
 *   code: ERR_OSSL_EVP_UNSUPPORTED
 *
 * Pesan itu tidak menyebut webpack, tidak menyebut md4, dan tidak menyebut
 * Node — jadi yang menemuinya pertama kali hampir pasti mengira kodenya yang
 * rusak.
 *
 * ── Kenapa tidak menempelkan flag-nya begitu saja ─────────────────────────
 *
 * `--openssl-legacy-provider` baru ada sejak Node 17. Menuliskannya mati di
 * skrip build akan MEMBUAT build gagal di Node 16 — yang kemungkinan besar
 * justru versi yang dipakai Vercel sekarang, karena build di sana masih
 * berhasil tanpa flag apa pun. Menukar satu kegagalan dengan kegagalan lain
 * bukan perbaikan.
 *
 * Karena itu flag-nya ditambahkan hanya kalau Node-nya memang membutuhkannya.
 *
 * ── Kenapa bukan menaikkan Angular ───────────────────────────────────────
 *
 * Itu perbaikan yang benar, dan jauh lebih besar daripada satu berkas ini:
 * Angular 12 → 17 melewati lima versi mayor, termasuk perubahan Ivy dan
 * standalone components. Yang di sini menjaga build tetap hidup sampai
 * peningkatan itu benar-benar dikerjakan.
 */
const { spawnSync } = require('child_process');

const mayor = Number(process.versions.node.split('.')[0]);
const perluFlag = mayor >= 17;

const opsiLama = process.env.NODE_OPTIONS || '';
const env = { ...process.env };
if (perluFlag && !opsiLama.includes('openssl-legacy-provider')) {
  env.NODE_OPTIONS = `${opsiLama} --openssl-legacy-provider`.trim();
  console.log(
    `[build] Node ${process.versions.node} memakai OpenSSL 3; ` +
    'menambahkan --openssl-legacy-provider untuk webpack 5 (md4).',
  );
}

const hasil = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['ng', 'build', ...process.argv.slice(2)],
  { stdio: 'inherit', env },
);

process.exit(hasil.status === null ? 1 : hasil.status);
