/* js/webgis-klinik.js */
(() => {
    "use strict";

    // =========================
    // 1) DATA (silakan kamu edit)
    // =========================
    // Tips: pastikan tiap item punya id unik, lat, lng
    const CLINICS_24H = [
        // ----------------
        // Jakarta Pusat
        // ----------------
        {
            id: "JP01",
            name: "Klinik Sahira",
            wilayah: "Jakarta Pusat",
            address: "Jalan Rawa Selatan 4-Mardani Raya, RT.17/RW.3, Johar Baru, Jakarta Pusat 10560",
            phone: "+62 21 4202516",
            lat: -6.18129,
            lng: 106.85885,
        },
        {
            id: "JP02",
            name: "Clinics Cempaka Putih Pratama 24 Hours",
            wilayah: "Jakarta Pusat",
            address: "Komplek Sekneg, Jl. Percetakan Negara II No.18, Rawasari, Cempaka Putih, Jakarta Pusat 10570",
            phone: "+62 21 4222299",
            lat: -6.1794911,
            lng: 106.8661219,
        },
        {
            id: "JP03",
            name: "Klinik 24 Jam Dokter",
            wilayah: "Jakarta Pusat",
            address: "Jl. Percetakan Negara II No.21, Johar Baru, Jakarta Pusat 10560",
            phone: "+62 21 4248843",
            lat: -6.1872074,
            lng: 106.8556859,
        },
        {
            id: "JP04",
            name: "Klinik Rawasari Dokter 24 Jam",
            wilayah: "Jakarta Pusat",
            address: "Jl. Percetakan Negara No.31, RT.10/RW.5, Johar Baru, Jakarta Pusat 10570",
            phone: "+62 21 4220465",
            lat: -6.1886229,
            lng: 106.8617625,
        },

        // ----------------
        // Jakarta Barat
        // ----------------
        {
            id: "JB01",
            name: "Klinik Pratama MH. Thamrin 3 Angke",
            wilayah: "Jakarta Barat",
            address:
                "Komplek Taman Duta Mas Blok D9B No.2-3, Jl. Pangeran Tubagus Angke, Wijaya Kusuma, Grogol Petamburan, Jakarta Barat 11460",
            phone: "+62 21 5675259",
            lat: -6.1443806,
            lng: 106.7801399,
        },
        {
            id: "JB02",
            name: "Klinik MH Thamrin Cengkareng",
            wilayah: "Jakarta Barat",
            address: "Jl. Kamal Raya Outer Ring Road, Cengkareng, Jakarta Barat",
            phone: "+62 21 54396298",
            lat: -6.1590137,
            lng: 106.6964502,
        },
        {
            id: "JB03",
            name: "Klinik Cendana",
            wilayah: "Jakarta Barat",
            address: "Jl. Jelambar Baru Raya No.26-B, Jelambar Baru, Grogol Petamburan, Jakarta Barat 11460",
            phone: "+62 21 5643067",
            lat: -6.1550887,
            lng: 106.7919997,
        },
        {
            id: "JB04",
            name: "Klinik Safira",
            wilayah: "Jakarta Barat",
            address: "Jl. Joglo Raya No.45, Joglo, Kembangan, Jakarta Barat 11640",
            phone: "+62 21 58900171",
            lat: -6.2189906,
            lng: 106.7284441,
        },

        // ----------------
        // Jakarta Selatan
        // ----------------
        {
            id: "JS01",
            name: "Klinik Tria Medika",
            wilayah: "Jakarta Selatan",
            address: "Jl. Dr. Saharjo No.179, Menteng Dalam, Tebet, Jakarta Selatan 12870",
            phone: "+62 21 71357779",
            lat: -6.2213999,
            lng: 106.8465679,
        },
        {
            id: "JS02",
            name: "Klinik Restu Ibu",
            wilayah: "Jakarta Selatan",
            address: "Jl. Swadaya 1 No.52, Pejaten Timur, Pasar Minggu, Jakarta Selatan 12510",
            phone: "+62 21 78840267",
            lat: -6.2966634,
            lng: 106.8449588,
        },
        {
            id: "JS03",
            name: "Klinik Kemang Medika Dokter 24 Jam",
            wilayah: "Jakarta Selatan",
            address: "Jl. Ampera Raya No.6, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560",
            phone: "+62 21 7800100",
            lat: -6.2759952,
            lng: 106.8204405,
        },
        {
            id: "JS04",
            name: "Klinik 24 Jam Medika Wijaya",
            wilayah: "Jakarta Selatan",
            address: "Jl. Wijaya I No.318Q, Petogogan, Kebayoran Baru, Jakarta Selatan 12170",
            phone: "+62 21 72793600",
            lat: -6.247176,
            lng: 106.806575,
        },
        {
            id: "JS05",
            name: "Klinik Medika 1 (Dokter 24 Jam)",
            wilayah: "Jakarta Selatan",
            address: "Jl. Radio Dalam Raya No.8, Gandaria Utara, Kebayoran Baru, Jakarta Selatan 12140",
            phone: "+62 21 7226040",
            lat: -6.2506993,
            lng: 106.7915075,
        },
        {
            id: "JS06",
            name: "Klinik 212 24 Jam",
            wilayah: "Jakarta Selatan",
            address: "Jl. Jagakarsa Raya No.52A, Jagakarsa, Jakarta Selatan",
            phone: "-",
            lat: -6.3266916,
            lng: 106.8214383,
        },

        // ----------------
        // Jakarta Timur
        // ----------------
        {
            id: "JT01",
            name: "Klinik Zafira Medika",
            wilayah: "Jakarta Timur",
            address: "Jl. Kayumanis Timur No.37, Kayu Manis, Matraman, Jakarta Timur 13130",
            phone: "-",
            lat: -6.1986433,
            lng: 106.8621455,
        },
        {
            id: "JT02",
            name: "Klinik Medika Sartika / Hemodialisa Sartika",
            wilayah: "Jakarta Timur",
            address: "Jl. Dewi Sartika, Cawang, Kramat Jati, Jakarta Timur",
            phone: "+62 21 80888464",
            lat: -6.2519643,
            lng: 106.865123,
        },
        {
            id: "JT03",
            name: "Klinik Kalisari 24 Jam",
            wilayah: "Jakarta Timur",
            address: "Jl. Kalisari Raya, Kalisari, Pasar Rebo, Jakarta Timur 13790",
            phone: "-",
            lat: -6.337382,
            lng: 106.857434,
        },
        {
            id: "JT04",
            name: "Klinik 24 Jam Esha Medika / Apotek 24 Jam Esha Farma",
            wilayah: "Jakarta Timur",
            address: "Jl. Raya Condet, Batu Ampar, Kramat Jati, Jakarta Timur",
            phone: "+62 21 87897265",
            lat: -6.3282481,
            lng: 106.8713156,
        },
        {
            id: "JT05",
            name: "Praktek Dokter Umum 24 Jam Dr. Elsa (area Batu Ampar)",
            wilayah: "Jakarta Timur",
            address: "Batu Ampar, Kramat Jati, Jakarta Timur 13520",
            phone: "+62 21 80886446",
            lat: -6.2737946,
            lng: 106.8605579,
        },

        // ----------------
        // Jakarta Utara
        // ----------------
        {
            id: "JU01",
            name: "Klinik Rajawali",
            wilayah: "Jakarta Utara",
            address: "Jl. Pademangan I No.29B, Pademangan Timur, Jakarta Utara 14410",
            phone: "-",
            lat: -6.1430076,
            lng: 106.8410697,
        },
        {
            id: "JU02",
            name: "Klinik 24 Jam Permata Medika",
            wilayah: "Jakarta Utara",
            address: "Jl. Plumpang Semper Raya No.22, Tugu Utara, Koja, Jakarta Utara 14110",
            phone: "+62 21 4303619",
            lat: -6.1298184,
            lng: 106.9107711,
        },
        {
            id: "JU03",
            name: "Klinik Bidan Erni (Area Muara Angke)",
            wilayah: "Jakarta Utara",
            address: "Muara Angke, Penjaringan, Jakarta Utara",
            phone: "+62 812-2264-6698",
            lat: -6.1112373,
            lng: 106.7722845,
        },
    ];


    // =========================
    // 2) INIT MAP
    // =========================
    const mapEl = document.getElementById("mapKlinik");
    const listEl = document.getElementById("clinicList");
    const statusEl = document.getElementById("statusKlinik");

    if (!mapEl || !listEl) {
        // Kalau elemen belum ada, jangan bikin error di page lain.
        return;
    }

    const map = L.map("mapKlinik").setView([-6.1754, 106.8272], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // =========================
    // 3) STYLE untuk marker (circle)
    // =========================
    const styleDefault = {
        radius: 7,
        weight: 2,
        color: "#0d6efd",
        fillColor: "#0d6efd",
        fillOpacity: 0.75,
    };

    const styleHover = {
        radius: 9,
        weight: 3,
        color: "#0d6efd",
        fillColor: "#0d6efd",
        fillOpacity: 0.9,
    };

    const styleActive = {
        radius: 10,
        weight: 3,
        color: "#dc3545",
        fillColor: "#dc3545",
        fillOpacity: 0.95,
    };

    // =========================
    // 4) STATE untuk highlight yang "stay"
    // =========================
    let activeClinicId = null; // <--- INI KUNCI: siapa yang sedang aktif
    const markerById = new Map();
    const layer = L.layerGroup().addTo(map);

    // User location (opsional)
    let userLatLng = null;
    let userMarker = null;

    // =========================
    // 5) Utils
    // =========================
    const escapeHtml = (s) =>
        String(s ?? "").replace(/[&<>"']/g, (m) => {
            const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
            return map[m];
        });

    function haversineKm(a, b) {
        // a, b: {lat, lng}
        const R = 6371;
        const dLat = ((b.lat - a.lat) * Math.PI) / 180;
        const dLng = ((b.lng - a.lng) * Math.PI) / 180;
        const lat1 = (a.lat * Math.PI) / 180;
        const lat2 = (b.lat * Math.PI) / 180;

        const x =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

        return 2 * R * Math.asin(Math.sqrt(x));
    }

    function googleMapsDirUrl(lat, lng) {
        return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    }

    // =========================
    // 6) LOGIKA HIGHLIGHT "STAY"
    // =========================
    function setActiveClinic(id, pan = true) {
        if (!markerById.has(id)) return;

        // Reset yang lama (kalau ada)
        if (activeClinicId && markerById.has(activeClinicId) && activeClinicId !== id) {
            markerById.get(activeClinicId).setStyle(styleDefault);
            setListActive(activeClinicId, false);
        }

        // Set yang baru
        const mk = markerById.get(id);
        mk.setStyle(styleActive);
        mk.bringToFront();
        mk.openPopup();

        setListActive(id, true);
        activeClinicId = id;

        if (pan) {
            map.panTo(mk.getLatLng(), { animate: true, duration: 0.5 });
        }
    }

    function clearActiveClinic() {
        if (!activeClinicId) return;

        const mk = markerById.get(activeClinicId);
        if (mk) mk.setStyle(styleDefault);

        setListActive(activeClinicId, false);
        activeClinicId = null;
    }

    function setListActive(id, isActive) {
        const row = document.getElementById(`clinic-${id}`);
        if (!row) return;
        row.classList.toggle("active", isActive);
    }

    // Klik area kosong map → clear highlight
    map.on("click", (e) => {
        const t = e.originalEvent?.target;
        // Kalau yang diklik itu marker vector leaflet, biarkan event marker yang handle
        if (t && t.classList && t.classList.contains("leaflet-interactive")) return;
        clearActiveClinic();
    });

    // =========================
    // 7) Render marker + list
    // =========================
    function popupHtml(c) {
        const dist = userLatLng ? haversineKm(userLatLng, { lat: c.lat, lng: c.lng }) : null;
        const distText = dist != null ? `<div><b>Jarak:</b> ${dist.toFixed(2)} km</div>` : "";

        return `
      <div style="min-width: 220px">
        <div style="font-weight: 700; margin-bottom: 6px">${escapeHtml(c.name)}</div>
        <div><b>Wilayah:</b> ${escapeHtml(c.wilayah)}</div>
        <div><b>Alamat:</b> ${escapeHtml(c.address)}</div>
        <div><b>Telp:</b> ${escapeHtml(c.phone)}</div>
        ${distText}
        <div style="margin-top: 8px">
          <a href="${googleMapsDirUrl(c.lat, c.lng)}" target="_blank" rel="noopener">
            Buka Rute (Google Maps)
          </a>
        </div>
      </div>
    `;
    }

    function renderMarkers(items) {
        layer.clearLayers();
        markerById.clear();

        items.forEach((c) => {
            const mk = L.circleMarker([c.lat, c.lng], styleDefault).addTo(layer);

            mk.bindPopup(popupHtml(c));

            // CLICK: aktif → highlight STAY
            mk.on("click", () => setActiveClinic(c.id, true));

            // HOVER: hanya sementara kalau bukan yang aktif
            mk.on("mouseover", () => {
                if (activeClinicId !== c.id) mk.setStyle(styleHover);
            });

            mk.on("mouseout", () => {
                if (activeClinicId !== c.id) mk.setStyle(styleDefault);
            });

            markerById.set(c.id, mk);
        });
    }

    function renderList(items) {
        listEl.innerHTML = "";

        // Kalau ada lokasi user, tampilkan jarak & urutkan
        const enriched = items
            .map((c) => {
                const distanceKm = userLatLng ? haversineKm(userLatLng, { lat: c.lat, lng: c.lng }) : null;
                return { ...c, distanceKm };
            })
            .sort((a, b) => {
                if (a.distanceKm == null && b.distanceKm == null) return 0;
                if (a.distanceKm == null) return 1;
                if (b.distanceKm == null) return -1;
                return a.distanceKm - b.distanceKm;
            });

        enriched.forEach((c) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "list-group-item list-group-item-action";
            btn.id = `clinic-${c.id}`;

            const dist = c.distanceKm != null ? `${c.distanceKm.toFixed(2)} km` : "";
            btn.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
          <div style="font-weight: 700">${escapeHtml(c.name)}</div>
          <small class="text-muted">${escapeHtml(c.wilayah)}</small>
        </div>
        <small class="text-muted">${escapeHtml(c.address)}</small>
        ${dist ? `<div class="small mt-1"><b>Jarak:</b> ${dist}</div>` : ""}
      `;

            // Klik list → aktifkan marker + highlight STAY
            btn.addEventListener("click", () => setActiveClinic(c.id, true));

            listEl.appendChild(btn);
        });
    }

    function setStatus(msg) {
        if (!statusEl) return;
        statusEl.textContent = msg || "";
    }

    // =========================
    // 8) Filter (Input/Output)
    // =========================
    function applyFilter() {
        const q = (document.getElementById("qKlinik")?.value || "").trim().toLowerCase();
        const wilayah = document.getElementById("wilayahKlinik")?.value || "";

        const filtered = CLINICS_24H.filter((c) => {
            const matchWilayah = !wilayah || c.wilayah === wilayah;
            const hay = `${c.name} ${c.address} ${c.wilayah}`.toLowerCase();
            const matchQ = !q || hay.includes(q);
            return matchWilayah && matchQ;
        });

        // Kalau yang aktif hilang karena filter, clear highlight
        if (activeClinicId && !filtered.some((x) => x.id === activeClinicId)) {
            clearActiveClinic();
        }

        renderMarkers(filtered);
        renderList(filtered);
        setStatus(`Menampilkan ${filtered.length} klinik.`);
    }

    // Listener form (submit)
    const form = document.getElementById("filterFormKlinik");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            applyFilter();
        });
    }

    // =========================
    // 10) First render
    // =========================
    applyFilter();

    // Fit semua titik sekali di awal (taruh DI LUAR if(form))
    const bounds = L.latLngBounds(CLINICS_24H.map((c) => [c.lat, c.lng]));
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [30, 30] });


    // =========================
    // 9) Lokasi saya (Input)
    // =========================
    const btnLokasi = document.getElementById("btnLokasiSaya");
    if (btnLokasi) {
        btnLokasi.addEventListener("click", () => {
            if (!navigator.geolocation) {
                setStatus("Browser kamu tidak mendukung Geolocation.");
                return;
            }

            setStatus("Mengambil lokasi...");

            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;
                    userLatLng = { lat, lng };

                    if (!userMarker) {
                        userMarker = L.marker([lat, lng]).addTo(map).bindPopup("Lokasi saya");
                    } else {
                        userMarker.setLatLng([lat, lng]);
                    }

                    map.setView([lat, lng], 13);
                    setStatus("Lokasi berhasil diambil. Jarak klinik dihitung dari lokasi kamu.");

                    // Re-render list supaya ada jarak & urutan terdekat
                    applyFilter();
                },
                (err) => {
                    setStatus(`Gagal mengambil lokasi: ${err.message}`);
                },
                { enableHighAccuracy: true, timeout: 10000 }
            );
        });
    }

    // =========================
    // 10) First render
    // =========================
    applyFilter();

    // =========================
    // 11) BONUS CSS kecil (biar item aktif kelihatan)
    // =========================
    // Biar gak ngubah banyak file CSS, kita inject style kecil.
    const style = document.createElement("style");
    style.textContent = `
    #clinicList .list-group-item.active{
      border-left: 6px solid #dc3545;
    }
  `;
    document.head.appendChild(style);
})();
