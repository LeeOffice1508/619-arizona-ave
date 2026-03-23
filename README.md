# 619 Arizona Avenue — Property Microsite
**Lee & Associates West LA**

---

## Before Going Live — Add Your Files

### Images needed (drop into the `images/` folder):
| Filename | Use |
|---|---|
| `LWLA_logo.png` | Nav + contact footer logo (transparent PNG) |
| `hero.jpg` | Exterior/street shot — full viewport hero |
| `overview.jpg` | Interior or courtyard — overview section right panel |
| `contact-bg.jpg` | Background photo for contact section |
| `gallery1.jpg` | Most dramatic interior — displays **tall** (left column) |
| `gallery2.jpg` | Interior shot |
| `gallery3.jpg` | Interior shot |
| `gallery4.jpg` | Outdoor/patio or strong exterior — displays **wide** (bottom left) |
| `gallery5.jpg` | Any interior or detail |
| `gallery6.jpg` | Second row, col 1 |
| `gallery7.jpg` | Second row, col 2 |
| `gallery8.jpg` | Second row, col 3 |
| `gallery9.jpg` | Second row, col 4 |

### Brand fonts (drop into the `fonts/` folder, then uncomment the @font-face block in style.css):
- `Insignia-Roman.ttf`
- `DIN-Medium.otf`
- `DIN-Bold.otf`

---

## Deploy to GitHub + Cloudflare Pages

### Step 1 — Create GitHub repo
1. Go to **github.com/new**
2. Name the repo: `619-arizona-ave`
3. Set to **Public** → Create repository
4. On the empty repo page, click **"uploading an existing file"**
5. **Unzip this folder first**, then drag all contents (including `images/`, `fonts/`) into the uploader
6. Commit message: `Initial commit` → **Commit changes**

### Step 2 — Deploy on Cloudflare Pages
1. Go to **dash.cloudflare.com** → Workers & Pages → Create → Pages
2. Connect to Git → Authorize GitHub → Select `619-arizona-ave`
3. Settings:
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/`
4. **Save and Deploy**

Site goes live at `https://619-arizona-ave.pages.dev` in ~60 seconds.

### Step 3 — Custom domain (optional)
In your Pages project → Custom domains tab → Set up a custom domain.

---

## Updating the site after launch
- **Text/price edits:** Edit `index.html` directly in GitHub (pencil icon) → commit → auto-redeploys
- **Image swap:** Go to file → `···` → Delete → commit, then Add file → Upload → commit
- **Add asking price:** Find `Contact Brokers for Details` in index.html and replace with the actual price/rate

---

## Brokers listed
- Thomas Isola — Principal — 310.899.2709 — tisola@leewestla.com
- Aleks Trifunovic — Principal — 310.899.2721 — atrifunovic@leewestla.com
- Keith Fielding — Principal — 310.899.2719 — kfielding@leewestla.com
- Tibor Lody — Principal — 310.899.2720 — tolody@leewestla.com
- Adam Levine — Senior Associate — 310.899.2703 — alevine@leewestla.com
