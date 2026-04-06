# Penn UES Website

Penn Undergraduate Economics Society — pennues.com

## File Structure

```
pennues/
├── index.html          ← Homepage
├── about.html          ← About page
├── team.html           ← Executive board
├── committees.html     ← Committees
├── almanacs.html       ← Almanac PDFs
├── sponsors.html       ← Sponsors
├── join.html           ← Join Us / links
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png                        ← Club logo (add this!)
│   ├── sponsors.png                    ← Sponsors image (add this!)
│   ├── team/
│   │   ├── ben-serafin.jpg
│   │   ├── claire-morana.jpg
│   │   ├── maggie-gu.jpg
│   │   ├── khalil-el-bechir.jpg
│   │   ├── jazz-chng.jpg
│   │   ├── gretta-maguire.jpg
│   │   ├── seema-parmar.jpg
│   │   ├── albert-zeng.jpg
│   │   └── lily-howard.jpg
│   └── almanacs/
│       ├── fall-2024-cover.jpg
│       ├── spring-2025-cover.jpg
│       └── fall-2025-cover.jpg
└── pdfs/
    ├── almanac-fall-2024.pdf
    ├── almanac-spring-2025.pdf
    └── almanac-fall-2025.pdf
```

## Things to Fill In Before Launch

1. **images/logo.png** — Add the club logo
2. **images/team/*.jpg** — Add headshots for each exec member (name files exactly as shown)
3. **images/almanacs/*.jpg** — Add cover images for each almanac edition
4. **images/sponsors.png** — Add the sponsors image
5. **pdfs/*.pdf** — Add the almanac PDF files
6. **join.html** — Replace `YOUR_LISTSERV_LINK_HERE` with the actual listserv signup URL
7. **index.html & join.html** — Update email address if different from pennues@gmail.com
8. **join.html** — Update Instagram and LinkedIn URLs if different

## Deploying to GitHub Pages

1. Go to github.com and sign up for a free account
2. Click the "+" icon → "New repository"
3. Name it exactly: `pennues.github.io` (or any name — you'll set custom domain next)
4. Set to Public, click "Create repository"
5. Upload all these files (drag and drop in the GitHub interface)
6. Go to Settings → Pages → Source: "Deploy from a branch" → Branch: main → Save
7. Your site will be live at `https://pennues.github.io` within a few minutes

## Connecting pennues.com (Custom Domain)

Once your domain transfer to Namecheap completes:

1. In GitHub → Settings → Pages → Custom domain: type `pennues.com` → Save
2. GitHub will create a CNAME file automatically
3. In Namecheap DNS settings, add these records:
   - A record: `@` → `185.199.108.153`
   - A record: `@` → `185.199.109.153`
   - A record: `@` → `185.199.110.153`
   - A record: `@` → `185.199.111.153`
   - CNAME record: `www` → `pennues.github.io`
4. Check "Enforce HTTPS" in GitHub Pages settings
5. DNS propagation takes 10 min – 48 hours

## Updating the Site in the Future

To update content (new exec members, new almanac, etc.):
- Go to your GitHub repository
- Click the file you want to edit
- Click the pencil icon to edit
- Make changes and click "Commit changes"
- Site updates automatically within ~1 minute
