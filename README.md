# Shopping Tracker

ඕනෑම supermarket එකක බිලක් (PDF එකක් හෝ කඩදාසි බිලේ photo එකක්) කියවලා, බඩු, මිල, මාසෙ වියදම, කඩ අනුව මිල සසඳන Android app එක.

## APK එක ගන්න
**Releases** (දකුණු පැත්තේ) → අලුත්ම version එක → `ShoppingTracker-v1.0.x.apk` download කරලා install කරන්න.

## කියවන්න පුළුවන් දේ
- Keells e-bill සහ Mahajana Hypermart invoice PDF (විශේෂ readers, total එකට හරියටම check කරනවා)
- වෙන ඕනෑම කඩේක PDF බිල් (Cargills, Arpico, Glomark, SPAR, ...) — පොදු reader එකෙන්
- කඩදාසි බිලේ photo / scan කරපු PDF — app එක ඇතුළේම තියෙන offline OCR (Tesseract) එකෙන්
- බඩු එකතුව බිලේ total එකට නොගැලපුණොත් "බිල හදන්න" editor එකෙන් හදන්න පුළුවන්

## Build වෙන හැටි
- App එක `www/index.html` (single file, PDF reader එක ඇතුළෙම). Photo reader files `npm run ocr` එකෙන් `www/ocr/` එකට copy වෙනවා.
- `main` branch එකට push කරාම GitHub Actions (`.github/workflows/build-apk.yml`) Capacitor 8 එකෙන් APK එක build කරලා Release එකක් හදනවා.
- Signing: repo secrets `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` තිබුණොත් හැම build එකක්ම එකම key එකෙන් sign වෙනවා (updates පරණ app එක උඩින් install වෙනවා, data නැති වෙන්නේ නැහැ).

## දත්ත
බිල් save වෙන්නේ phone එකේ app එක ඇතුළේ විතරයි. Settings → Backup ගන්න.
