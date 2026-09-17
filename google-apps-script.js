/**
 * Google Apps Script for SuperJeffC Photography Inquiry Webhook
 *
 * Instructions:
 * 1. Go to https://script.google.com while signed in as jeff@superjeffc.com
 * 2. Click "New Project" and replace all existing code in Code.gs with this file.
 * 3. Click "Deploy" -> "New deployment"
 * 4. Choose type: "Web app"
 * 5. Set Description: "Photography Inquiry Webhook"
 * 6. Set "Execute as": "Me (jeff@superjeffc.com)"
 * 7. Set "Who has access": "Anyone"  <-- CRITICAL so your website can send inquiries!
 * 8. Click "Deploy", authorize permissions when prompted, and copy the Web App URL!
 * 9. Paste the Web App URL into your `.env` file as `VITE_GOOGLE_SCRIPT_URL=your_url_here`
 */

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var inquiryId = data.inquiryId || ("NYC-" + Math.floor(100000 + Math.random() * 900000));
    var name = data.name || "Anonymous Client";
    var email = data.email || "No email provided";
    var phone = data.phone || "No phone provided";
    var location = data.location || "Not specified";
    var sessionType = data.sessionType || "Not specified";
    var guestsCount = data.guestsCount || "Up to 2 People";
    var date = data.date || "Flexible / Not specified";
    var message = data.message || "None provided";

    var recipient = "jeff@superjeffc.com";
    var subject = "📸 New NYC Photography Inquiry: " + name + " (" + inquiryId + ")";

    var htmlBody = 
      "<div style='font-family: Arial, sans-serif; max-width: 600px; color: #1a1a1a;'>" +
        "<h2 style='color: #d97706; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;'>New NYC Photography Inquiry</h2>" +
        "<table style='width: 100%; border-collapse: collapse; font-size: 14px;'>" +
          "<tr><td style='padding: 8px 0; font-weight: bold; width: 160px;'>Reference ID:</td><td>" + inquiryId + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Client Name:</td><td>" + name + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Email Address:</td><td><a href='mailto:" + email + "'>" + email + "</a></td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Phone / WhatsApp:</td><td>" + phone + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>NYC Location:</td><td><strong>" + location + "</strong></td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Session Type:</td><td>" + sessionType + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Party Size:</td><td>" + guestsCount + "</td></tr>" +
          "<tr><td style='padding: 8px 0; font-weight: bold;'>Requested Date:</td><td>" + date + "</td></tr>" +
        "</table>" +
        "<br>" +
        "<div style='background: #f4f4f5; padding: 12px; border-radius: 8px; border-left: 4px solid #f59e0b;'>" +
          "<strong>Notes / Vision:</strong><br>" +
          "<p style='margin: 4px 0 0 0; white-space: pre-wrap;'>" + message + "</p>" +
        "</div>" +
        "<br><hr style='border: none; border-top: 1px solid #e4e4e7;'>" +
        "<p style='font-size: 11px; color: #71717a;'>Received automatically from SuperJeffC Photography Booking Form.</p>" +
      "</div>";

    // Send email using your Google Workspace Gmail account
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: email
    });

    // Optional: Log inquiry to active Google Sheet if attached to a sheet
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.appendRow([
        new Date(),
        inquiryId,
        name,
        email,
        phone,
        location,
        sessionType,
        date,
        message
      ]);
    } catch (sheetErr) {
      // If standalone script (not attached to a Sheet), ignore
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", inquiryId: inquiryId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
