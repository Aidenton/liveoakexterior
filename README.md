# Live Oak Exterior — Website

Static marketing website for Live Oak Exterior, a coastal NC window cleaning business.

**Stack:** Plain HTML5, CSS3, vanilla JS. No build step. No dependencies.

---

## Running Locally

Option 1 — just open the file:
```
open index.html
```
Note: some browsers block local font/image loading. Use option 2 for a proper local preview.

Option 2 — Python local server (recommended):
```bash
cd liveoakexterior
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## Logo Files

Place your logo files in `/public/images/` with these exact filenames:

| File | Used on |
|---|---|
| `liveoaklogo.png` | Header, footer, hero (primary logo — transparent background) |
| `logo-dark.png` | Badge/stamp version on dark backgrounds (optional accent) |
| `logo-light.png` | Badge/stamp version on light backgrounds (optional accent) |

The site already references these paths. Just drop the files in and they'll appear.

---

## Adding Before/After Photos

1. Drop your images into `/public/images/before-after/`
2. Name them `before-1.jpg`, `after-1.jpg`, `before-2.jpg`, `after-2.jpg`, etc.
3. Open `index.html` and find the `<!-- BEFORE/AFTER PHOTOS -->` comment block
4. Replace each `.ba-placeholder` div with a `.ba-pair` block:

```html
<div class="ba-pair">
  <div class="ba-img">
    <img src="/public/images/before-after/before-1.jpg" alt="Before window cleaning" loading="lazy">
    <span class="ba-label">Before</span>
  </div>
  <div class="ba-img">
    <img src="/public/images/before-after/after-1.jpg" alt="After window cleaning" loading="lazy">
    <span class="ba-label">After</span>
  </div>
</div>
```

5. Remove the `.ba-placeholder` divs as you replace them.

**Recommended image size:** 1200×900px, JPG, under 300KB each.

---

## Adding Testimonials

Open `index.html` and find the `<!-- TESTIMONIALS -->` comment block.

Each testimonial card looks like this — just replace the placeholder text:

```html
<div class="testimonial-card fade-in">
  <div class="stars">★★★★★</div>
  <p class="testimonial-quote">"Your real customer quote goes here."</p>
  <p class="testimonial-attr">Customer Name <span>Town, NC</span></p>
</div>
```

Copy the block above to add more cards — the grid handles the layout automatically.

---

## Activating the Web3Forms Contact Form

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter `aiden@liveoakexterior.com` and click **"Create Access Key"**
3. Copy the access key you receive
4. Open `contact.html` and find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
6. Save the file and deploy

Form submissions will now be emailed directly to you. The free tier handles 250 submissions/month.

---

## Adding New Services

When you're ready to launch Soft Washing, Driveway Cleaning, or Gutter Cleaning:

1. Open `services.html`
2. Find the `.service-teaser` card for that service
3. Change `data-status="coming-soon"` to `data-status="active"`
4. The CSS automatically switches the card styling to "live" — no other CSS changes needed
5. Optionally: add a real service section above (like the Residential/Commercial sections) and link the "Learn More" button to it

---

## Deploying to Cloudflare Pages

### Step 1 — Push to GitHub

```bash
cd liveoakexterior
git init
git add .
git commit -m "Initial commit — Live Oak Exterior website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/liveoakexterior.git
git push -u origin main
```

### Step 2 — Connect Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Pages** in the left sidebar
3. Click **Create a project** → **Connect to Git**
4. Authorize GitHub and select the `liveoakexterior` repo
5. Configure the build:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (just a forward slash — the root)
6. Click **Save and Deploy**

Cloudflare will deploy the site and give you a `.pages.dev` URL within a minute.

### Step 3 — Add Your Custom Domain

1. In Cloudflare Pages, go to your project → **Settings** → **Custom domains**
2. Click **Add a domain**
3. Enter `liveoakexterior.com`
4. Follow the DNS instructions:
   - If your domain's nameservers are already at Cloudflare: it adds the DNS record automatically
   - If not: you'll add a CNAME record pointing `liveoakexterior.com` to your `.pages.dev` URL at your domain registrar

**Recommended:** Transfer your domain to Cloudflare Registrar for the simplest setup — DNS, SSL, and Pages all in one place.

### Future Deploys

Every `git push` to `main` automatically triggers a new Cloudflare Pages deployment. No manual steps needed.

---

## File Structure

```
liveoakexterior/
├── index.html              Homepage
├── about.html              About page
├── services.html           Services page
├── contact.html            Contact / quote form
├── public/
│   └── images/
│       ├── liveoaklogo.png     Primary logo (transparent bg)
│       ├── logo-dark.png       Badge version, dark bg
│       ├── logo-light.png      Badge version, light bg
│       ├── aiden.jpg           Owner photo (add when ready)
│       └── before-after/       Drop before/after photos here
├── css/
│   └── styles.css          All styles — color vars, typography, components
├── js/
│   └── main.js             Nav, scroll effects, form success, animations
├── robots.txt
├── sitemap.xml
└── README.md
```

---

© 2026 Live Oak Exterior. Coastal NC.
