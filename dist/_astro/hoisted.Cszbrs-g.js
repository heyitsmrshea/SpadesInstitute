import"./hoisted.Dp3RlRfs.js";function f(){const t=document.getElementById("ethicsForm");if(!t)return;const c=t.cloneNode(!0);t.parentNode?.replaceChild(c,t);const o=document.getElementById("ethicsForm");o&&o.addEventListener("submit",function(s){s.preventDefault(),s.stopPropagation();const e=new FormData(o),i=String(e.get("fullName")||"").trim(),l=String(e.get("agency")||"").trim(),d=String(e.get("position")||"").trim(),n=String(e.get("email")||"").trim();if(!i||!l||!d||!n)return alert("Please fill in all required fields."),!1;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n))return alert("Please enter a valid email address."),!1;const p=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),g=`
<!DOCTYPE html>
<html>
<head>
  <title>Ethics Disclosure - ${i}</title>
  <meta charset="UTF-8">
  <style>
    @page {
      margin: 0.6in;
      size: letter;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      width: 100%;
      margin: 0;
      padding: 40px 50px;
      line-height: 1.5;
      color: #1a1a1a;
      background: #ffffff;
      font-size: 12px;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 3px solid #1e3a5f;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .logo {
      font-size: 48px;
      color: #1e3a5f;
    }
    .header-text {
      text-align: left;
    }
    .org-name {
      font-size: 24px;
      font-weight: bold;
      color: #1e3a5f;
      letter-spacing: 1.5px;
      margin-bottom: 4px;
    }
    .org-subtitle {
      font-size: 11px;
      color: #4b5563;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .header-right {
      text-align: right;
      font-size: 10px;
      color: #6b7280;
      line-height: 1.6;
    }
    h1 {
      font-size: 18px;
      text-align: center;
      margin: 20px 0 16px 0;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #0f172a;
    }
    .intro {
      font-size: 11px;
      text-align: center;
      color: #374151;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    h2 {
      font-size: 12px;
      margin-top: 18px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      color: #1e3a5f;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 4px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 8px 16px;
      font-size: 11px;
      margin-bottom: 8px;
    }
    .info-label {
      font-weight: bold;
      color: #374151;
    }
    .info-value {
      color: #111827;
    }
    .cert-intro {
      font-size: 11px;
      margin-bottom: 8px;
    }
    .cert-list {
      margin-left: 24px;
      margin-top: 8px;
    }
    .cert-list li {
      margin-bottom: 6px;
      font-size: 11px;
      line-height: 1.5;
      color: #374151;
    }

    .signature-section {
      margin-top: 30px;
      display: flex;
      gap: 50px;
    }
    .signature-block {
      flex: 1;
    }
    .signature-line {
      border-bottom: 1px solid #1a1a1a;
      height: 35px;
      margin-bottom: 4px;
    }
    .signature-label {
      font-size: 10px;
      color: #6b7280;
    }
    .note {
      margin-top: 24px;
      padding: 12px 16px;
      background: #f3f4f6;
      border-left: 3px solid #1e3a5f;
      font-size: 10px;
      line-height: 1.6;
      color: #374151;
    }
    .note strong {
      color: #1e3a5f;
    }
    .footer {
      margin-top: 16px;
      padding-top: 10px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      font-size: 9px;
      color: #9ca3af;
    }
    .no-print {
      display: none !important;
    }
    @media print {
      body {
        margin: 0;
        padding: 0.6in;
      }
      .no-print {
        display: none !important;
        visibility: hidden !important;
      }
    }
    @media screen {
      .no-print {
        display: block;
        margin-top: 24px;
        text-align: center;
        padding: 16px;
        background: #f9fafb;
        border-radius: 8px;
      }
      .print-btn {
        padding: 12px 28px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        background: #1e3a5f;
        color: white;
        border: none;
        border-radius: 6px;
        transition: background 0.2s;
      }
      .print-btn:hover {
        background: #0f2a4a;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <div class="logo">♠︎</div>
      <div class="header-text">
        <div class="org-name">Spades Institute</div>
        <div class="org-subtitle">501(c)(3) Nonprofit · EIN 99-2763425</div>
      </div>
    </div>
    <div class="header-right">
      Washington DC<br>
      www.spadesinstitute.org<br>
      info@spadesinstitute.org
    </div>
  </div>
  
  <h1>Ethics Disclosure and Conflict of Interest Statement</h1>
  
  <p class="intro">
    For government employees wishing to participate in activities with Spades Institute, a 501(c)(3) nonprofit connecting government, industry, and academia to address national security priorities through nonpartisan collaboration.
  </p>
  
  <h2>Employee Information</h2>
  <div class="info-grid">
    <div class="info-label">Name:</div>
    <div class="info-value">${i}</div>

    <div class="info-label">Agency/Department:</div>
    <div class="info-value">${l}</div>

    <div class="info-label">Position/Title:</div>
    <div class="info-value">${d}</div>

    <div class="info-label">Official Email:</div>
    <div class="info-value">${n}</div>
  </div>
  
  <h2>Ethics Certification</h2>
  <p class="cert-intro">By signing below, I certify that:</p>
  <ol class="cert-list">
    <li>My participation with Spades Institute complies with all applicable ethics rules and regulations.</li>
    <li>I have reviewed and understand my agency's ethics guidelines regarding outside activities.</li>
    <li>I have disclosed any potential conflicts of interest to my ethics official.</li>
    <li>My participation will not create a conflict of interest or appearance of impropriety.</li>
    <li>I will not use government resources, time, or information for Spades Institute activities.</li>
  </ol>
  

  
  <div class="signature-section">
    <div class="signature-block">
      <div class="signature-line"></div>
      <div class="signature-label">Signature</div>
    </div>
    <div class="signature-block">
      <div class="signature-line" style="border-bottom-style: dotted;">${i}</div>
      <div class="signature-label">Printed Name</div>
    </div>
    <div class="signature-block" style="max-width: 140px;">
      <div class="signature-line" style="border-bottom-style: dotted;">${p}</div>
      <div class="signature-label">Date</div>
    </div>
  </div>

  <div class="footer">
    This form was generated at www.spadesinstitute.org/ethics-letter on ${p}
  </div>

  <div class="no-print">
    <div class="note" style="margin-bottom: 16px;">
      <strong>Next Steps:</strong> Print and submit this form to your agency's ethics official for approval before participating in Spades Institute activities. When submitting, include a brief description of your proposed activity. Questions? Contact info@spadesinstitute.org.
    </div>
    <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
    <p style="margin-top: 12px; font-size: 13px; color: #6b7280;">
      Use your browser's print dialog to save as PDF or print directly.
    </p>
  </div>
</body>
</html>`,a=window.open("","_blank");return a?(a.document.write(g),a.document.close()):alert("Please allow pop-ups for this site to generate the ethics letter."),!1})}function r(){f()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();document.addEventListener("astro:page-load",r);
