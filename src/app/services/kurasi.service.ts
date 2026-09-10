import { Injectable } from '@angular/core';

/**
 * Berkas kurasi dari API dasbor IYSA.
 *
 * ── Kenapa `fetch`, bukan HttpClient ──────────────────────────────────────
 *
 * Proyek ini belum pernah memanggil API mana pun — `HttpClientModule` tidak
 * ada di `app.module.ts`. Menambahkannya demi dua permintaan GET berarti satu
 * modul, satu rantai RxJS, dan satu hal lagi yang harus dipahami orang
 * berikutnya. `fetch` sudah ada di semua peramban yang menjalankan Angular 12.
 *
 * ── Kenapa akronim, bukan id edisi ───────────────────────────────────────
 *
 * Id edisi berganti tiap tahun. Menanamkannya di situs berarti ada dua
 * repositori yang harus disunting berbarengan tiap edisi baru, dan yang lupa
 * salah satunya baru ketahuan saat pengunjung membuka halaman kosong.
 */

export interface Edisi { tahun: string; nama: string; dipin: boolean; }

export interface BerkasKurasi {
  slot: string;
  /** 'administrasi' | 'dokumentasi' */
  jenis: string;
  nama: string;
  url: string | null;
  diunggah: string;
}

export interface ButirKurasi {
  nomor: number;
  butir: string;
  berkas: BerkasKurasi[];
}

const API = 'https://api-dashboard.iysa.or.id/api/public/v1';
const SERI = 'i3o';

@Injectable({ providedIn: 'root' })
export class KurasiService {
  private async ambil(jalur: string): Promise<any> {
    const res = await fetch(`${API}/${SERI}${jalur}`);
    if (!res.ok) { throw new Error(`HTTP ${res.status}`); }
    const json = await res.json();
    return json.data;
  }

  /** Edisi yang ada di dasbor, terbaru dulu. */
  async edisi(): Promise<Edisi[]> {
    const d = await this.ambil('/edisi');
    return (d && d.edisi) || [];
  }

  /**
   * Berkas kurasi satu edisi, sudah dikelompokkan per butir.
   *
   * Yang keluar hanya slot yang ditandai boleh disiarkan di dasbor — berkas
   * kurasi juga memuat anggaran, kontak juri, dan daftar peserta.
   */
  async berkas(tahun: string): Promise<ButirKurasi[]> {
    const d = await this.ambil(`?tahun=${encodeURIComponent(tahun)}&sections=berkas_kurasi`);
    const seksi = ((d && d.sections) || []).find((s: any) => s.key === 'berkas_kurasi');
    return (seksi && seksi.isi) || [];
  }
}
