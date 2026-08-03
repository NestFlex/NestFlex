# Deployment Guide: Oracle 3D Modular Homes App

This guide will help you host your application for free on **GitHub Pages** so that clients can view it without needing to log into Google.

## 1. Set Up Automated Emailing (Free via EmailJS)
To keep the "Send Brochure" and "Send Finance Form" features working, you need a free EmailJS account (replaces Google Apps Script).

1.  **Sign Up:** Go to [emailjs.com](https://www.emailjs.com/) and create a free account.
2.  **Add Service:** Connect your email (Gmail, Outlook, etc.) and note the **Service ID**.
3.  **Create Template:** 
    *   Create a new Email Template.
    *   Set the Subject to: `Requested Documents - Oracle 3D`
    *   Set the Body to:
        ```text
        Hi {{to_name}},

        As requested, here are the links to your documents:

        {{document_links}}

        If you have any questions, please contact {{agent_name}}.
        ```
    *   Note the **Template ID**.
4.  **Get Public Key:** Go to Account Settings > API Keys and note the **Public Key**.

**Update `index.html`:**
Open your new `index.html` and update these lines at the top of the script (around line 550):
```javascript
var EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; 
var EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
var EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

## 2. Host on GitHub Pages (Free & No Login)
1.  **Create a Repository:** Go to GitHub and create a new public repository (e.g., `oracle3d-app`).
2.  **Upload File:** Upload your updated `index.html` to the **root** of this repository.
3.  **Enable Pages:**
    *   Go to **Settings** > **Pages** in your GitHub repo.
    *   Under "Build and deployment", set Source to **Deploy from a branch**.
    *   Select your `main` branch and the `/ (root)` folder.
    *   Click **Save**.
4.  **Your Live URL:** GitHub will give you a link like `https://yourusername.github.io/oracle3d-app/`. 

**This link is now your production URL. It will not ask for a Google Login.**

## 3. (Optional) Custom Domain
If you want a professional domain (e.g., `portal.oracle3d.com`):
1.  Buy a domain from a provider (GoDaddy, Namecheap).
2.  In GitHub Settings > Pages, add your **Custom domain**.
3.  Follow the instructions to update your DNS records.

---
### Why this is better:
*   **Zero Login:** Clients see the app instantly.
*   **High Performance:** Faster loading than Google Apps Script.
*   **Professionalism:** You can use a custom domain name.
*   **Maintainable:** Changes are tracked in your GitHub repository.
