  /**
  * Insta Merch — Lead capture endpoint
  *
  * Deployment: deploy as Web App (Execute as: Me, Who has access: Anyone).
  * Paste the deployed Web App URL into the frontend env var VITE_LEAD_ENDPOINT.
  */

  const ADMIN_EMAIL = "instamerch.meet@gmail.com";
  const SHEET_NAME = "Leads";
  const BRAND_NAME = "Insta Merch";
  const BRAND_URL = "https://instamerch.in";

  function doPost(e) {
    try {
      const data = JSON.parse(e.postData.contents || "{}");
      const timestamp = new Date();

      const ss = SpreadsheetApp.getActiveSpreadsheet();
      let sheet = ss.getSheetByName(SHEET_NAME);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
        sheet.appendRow([
          "Timestamp",
          "Name",
          "Email",
          "Phone",
          "Instagram",
          "Followers",
          "Source",
        ]);
        sheet.getRange("A1:G1").setFontWeight("bold");
      }

      sheet.appendRow([
        timestamp,
        data.name || "",
        data.email || "",
        data.phone || "",
        data.instagram || "",
        data.followers || "",
        data.source || "",
      ]);

      const stamp = Utilities.formatDate(
        timestamp,
        "Asia/Kolkata",
        "dd MMM yyyy, hh:mm a"
      );

      MailApp.sendEmail({
        to: ADMIN_EMAIL,
        subject: "New Lead: " + (data.name || "Unknown") + " (" + (data.followers || "-") + ")",
        replyTo: data.email || ADMIN_EMAIL,
        htmlBody:
          "<div style=\"font-family:Arial,sans-serif;font-size:14px;color:#111\">" +
          "<h2 style=\"margin:0 0 12px;color:#E1306C\">New lead from " + BRAND_NAME + "</h2>" +
          "<table cellpadding=\"8\" cellspacing=\"0\" style=\"border-collapse:collapse;border:1px solid #eee\">" +
          row("Name", data.name) +
          row("Email", data.email) +
          row("Phone", data.phone) +
          row("Instagram", data.instagram) +
          row("Followers", data.followers) +
          row("Source", data.source) +
          row("Submitted", stamp) +
          "</table>" +
          "<p style=\"margin-top:16px;color:#666\">Reply to this email to reach the lead directly.</p>" +
          "</div>",
      });

      const firstName = String(data.name || "there").trim().split(/\s+/)[0];
      const autoreplySubject =
        "Thanks for booking your free strategy session — " + BRAND_NAME;
      const autoreplyHtml =
        "<div style=\"font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#111\">" +
        "<p>Hi " + escapeHtml(firstName) + ",</p>" +
        "<p>Thanks for booking your free strategy session with <b>" + BRAND_NAME + "</b>!</p>" +
        "<p>We've received your details and our team will personally review your profile and get in touch within <b>24 hours</b> to schedule your 30-minute call.</p>" +
        "<p>In this session, we'll map out your personalised <b>₹50L roadmap</b> — covering your brand identity, store setup, fulfilment, and launch marketing.</p>" +
        "<p><b>A few quick details we'll work from:</b></p>" +
        "<ul>" +
        "<li>Instagram: " + escapeHtml(data.instagram || "-") + "</li>" +
        "<li>Audience size: " + escapeHtml(data.followers || "-") + "</li>" +
        "<li>Reach you on: " + escapeHtml(data.phone || "-") + "</li>" +
        "</ul>" +
        "<p>If anything urgent comes up, just reply to this email — it comes straight to our team.</p>" +
        "<p>Talk soon,<br/><b>Team " + BRAND_NAME + "</b><br/><a href=\"" + BRAND_URL + "\">" + BRAND_URL + "</a></p>" +
        "</div>";

      MailApp.sendEmail({
        to: data.email,
        name: "Team " + BRAND_NAME,
        subject: autoreplySubject,
        replyTo: ADMIN_EMAIL,
        htmlBody: autoreplyHtml,
      });

      return jsonOut({ success: true });
    } catch (err) {
      return jsonOut({ success: false, error: String(err) });
    }
  }

  function doGet() {
    return jsonOut({ ok: true, service: "Insta Merch Lead Endpoint" });
  }

  function row(label, value) {
    return (
      "<tr>" +
      "<td style=\"border:1px solid #eee;background:#fafafa;font-weight:bold;white-space:nowrap\">" + label + "</td>" +
      "<td style=\"border:1px solid #eee\">" + escapeHtml(value || "-") + "</td>" +
      "</tr>"
    );
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");
  }

  function jsonOut(obj) {
    return ContentService
      .createTextOutput(JSON.stringify(obj))
      .setMimeType(ContentService.MimeType.JSON);
  }
