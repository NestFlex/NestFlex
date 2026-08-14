<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>NestFlex | XML Sitemap</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #333333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
          }
          .container {
            max-width: 1000px;
            width: 100%;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: #ffffff;
            padding: 40px;
          }
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header p {
            margin: 0;
            color: #94a3b8;
            font-size: 15px;
            line-height: 1.5;
          }
          .header a {
            color: #38bdf8;
            text-decoration: none;
          }
          .header a:hover {
            text-decoration: underline;
          }
          .content {
            padding: 40px;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            background: #f1f5f9;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #475569;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            background-color: #f8fafc;
            color: #64748b;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 14px 20px;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 16px 20px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;
            word-break: break-all;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          .url-link {
            color: #0f172a;
            text-decoration: none;
            font-weight: 500;
          }
          .url-link:hover {
            color: #2563eb;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 4px 8px;
            background: #e0f2fe;
            color: #0369a1;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>NestFlex XML Sitemap</h1>
            <p>This document is automatically generated for search engines to efficiently index the website structure. You can learn more about XML sitemaps at <a href="https://sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a>.</p>
          </div>
          <div class="content">
            <div class="stats">
              <span>Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
            </div>
            <table>
              <thead>
                <tr>
                  <th style="width: 55%;">URL Location</th>
                  <th style="width: 15%;">Priority</th>
                  <th style="width: 15%;">Change Freq.</th>
                  <th style="width: 15%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a class="url-link" href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="badge">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td style="color: #64748b;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
