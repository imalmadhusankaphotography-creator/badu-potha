# බඩු පොත — Shopping tracker

Keells e-bill සහ Mahajana Hypermart invoice PDF කියවලා, බඩු, මිල, මාසෙ වියදම track කරන Android app එක.

## APK එක ගන්න
**Releases** (දකුණු පැත්තේ) → අලුත්ම version එක → `BaduPotha-v1.0.x.apk` download කරලා install කරන්න.

## Build වෙන හැටි
- App එක තියෙන්නේ `www/index.html` එකේ (single file, PDF reader එක ඇතුළෙම — offline වැඩ කරනවා).
- `main` branch එකට push කරාම GitHub Actions (`.github/workflows/build-apk.yml`) Capacitor 8 එකෙන් APK එක build කරලා Release එකක් හදනවා.
- හැම build එකක්ම එකම signing key එකෙන් (repo secrets: `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`) — ඒ නිසා අලුත් version එක පරණ එක උඩින් install වෙනවා, save කරපු බිල් නැති වෙන්නේ නැහැ.

## දත්ත
බිල් save වෙන්නේ phone එකේ app එක ඇතුළේ විතරයි. Settings → Backup ගන්න.
