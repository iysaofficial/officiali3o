import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KurasiService, ButirKurasi } from '../../../services/kurasi.service';

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor.
 *
 * ── Kenapa tidak disalin ke situs ini ─────────────────────────────────────
 *
 * Situs lain memakai tautan Google Drive yang ditulis di kode. Cara itu
 * bekerja tepat satu kali: begitu ada berkas ditambahkan, diganti, atau
 * ditarik, situsnya tidak ikut tahu — dan yang membetulkannya harus orang
 * yang bisa deploy.
 *
 * ── Kenapa dikelompokkan per butir ────────────────────────────────────────
 *
 * Kurator memeriksa satu butir pada satu waktu, dan itu pula bentuk yang
 * dicari pengunjung: "mana berkas untuk butir Juri", bukan satu daftar rata
 * berisi puluhan nama berkas.
 */
@Component({
  selector: 'app-kurasi-tahun',
  templateUrl: './kurasi-tahun.component.html',
  styleUrls: ['./kurasi-tahun.component.scss'],
})
export class KurasiTahunComponent implements OnInit {
  tahun = '';
  butir: ButirKurasi[] | null = null;
  galat = false;

  constructor(private rute: ActivatedRoute, private kurasi: KurasiService) {}

  ngOnInit(): void {
    /*
     * Berlangganan parameter, bukan membacanya sekali.
     *
     * Angular memakai ulang komponen yang sama saat berpindah antar rute yang
     * hanya berbeda parameternya — /kurasi/2026 → /kurasi/2025 tidak
     * membangun ulang apa pun. Membacanya sekali di ngOnInit berarti
     * halamannya tetap menampilkan edisi yang lama.
     */
    this.rute.paramMap.subscribe((p) => {
      this.tahun = p.get('tahun') || '';
      this.butir = null;
      this.galat = false;
      this.kurasi.berkas(this.tahun)
        .then((d) => { this.butir = d; })
        .catch(() => { this.galat = true; });
    });
  }

  get jumlah(): number {
    return (this.butir || []).reduce((n, b) => n + b.berkas.length, 0);
  }
}
