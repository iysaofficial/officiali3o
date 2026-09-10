import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KurasiService, BerkasKurasi, berkasTampil } from '../../../services/kurasi.service';

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
export class KurasiTahunComponent implements OnInit, AfterViewInit, OnDestroy {
  tahun = '';
  berkas: BerkasKurasi[] | null = null;
  galat = false;

  @ViewChild('wadah') wadah?: ElementRef<HTMLElement>;
  private pengamat?: ResizeObserver;

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
      this.berkas = null;
      this.galat = false;
      this.kurasi.berkas(this.tahun)
        .then((d) => { this.berkas = berkasTampil(d); })
        .catch(() => { this.galat = true; });
    });
  }

  /*
   * Jarak dari atas diukur, bukan ditebak lewat breakpoint.
   *
   * Navbar situs ini melayang di atas isi, dan tingginya berubah menurut
   * lebar layar — hamburger satu baris di layar sempit, menu penuh yang bisa
   * membungkus di layar lebar. Nilai tetap akan menutupi judul di satu lebar
   * atau menyisakan ruang kosong di lebar lain.
   */
  ngAfterViewInit(): void {
    const kop = document.querySelector('.navbar-area, header, nav') as HTMLElement | null;
    const el = this.wadah?.nativeElement;
    if (!kop || !el) { return; }

    const sesuaikan = () => { el.style.paddingTop = `${kop.offsetHeight + 40}px`; };
    sesuaikan();
    this.pengamat = new ResizeObserver(sesuaikan);
    this.pengamat.observe(kop);
  }

  ngOnDestroy(): void {
    this.pengamat?.disconnect();
  }
}
