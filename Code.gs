function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('NestFlex Architectural Systems | Only Realty')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
/**
 * Emails one or more document links to a customer in a single email. 
 *
 * @param {string} toEmail
 * @param {Array<{title:string, url:string}>} docs
 */
function emailDocumentLinks(toEmail, docs) {
  try {
    if (!toEmail) return { success: false, message: 'Missing recipient email' };
    if (!docs || docs.length === 0) return { success: false, message: 'No documents to send' };

    var lines = docs.map(function (d) {
      return '- ' + (d.title || 'Document') + ': ' + d.url;
    }).join('\n');

    MailApp.sendEmail({
      to: toEmail,
      subject: 'Your Requested Document' + (docs.length > 1 ? 's' : '') + ' - NestFlex',
      body: 'Hi,\n\nAs requested, here ' + (docs.length > 1 ? 'are the links' : 'is the link') + ':\n\n' + lines +
        '\n\nIf you have any questions, reply directly to this email or contact Jacques La Grange at jacques@onlyrealty.co.za.\n\nOnly Realty Property Group'
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

/**
 * Notifies the quote team about a new quote request submission.
 */
function notifyTeamOfNewSubmission(quoteData) {
  try {
    var body = 'A new quote request has been submitted through the NestFlex Client Portal.\n\n' +
               'Client Details:\n' +
               '- Name: ' + quoteData.full_name + '\n' +
               '- Email: ' + quoteData.user_email + '\n' +
               '- Phone: ' + quoteData.phone_number + '\n' +
               '- Address: ' + quoteData.installation_address + '\n\n' +
               'Please log in to the Supabase dashboard to review the documents and provide a quote.';

    MailApp.sendEmail({
      to: 'info@oracle3d.co.za', // User mentioned this email for the team
      subject: 'New Quote Request - ' + quoteData.full_name,
      body: body
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

/**
 * Notifies the user when their quote status changes (e.g., from Submitted to Review).
 */
function notifyUserOfQuoteReady(userEmail, quoteUrl) {
  try {
    var body = 'Great news! Your NestFlex quote is ready for review.\n\n' +
               'You can view and accept your quote directly in the Client Portal on our website, or download it here: ' + quoteUrl + '\n\n' +
               'If you have any questions, please reply to this email.\n\n' +
               'Best regards,\n' +
               'The NestFlex Team';

    MailApp.sendEmail({
      to: userEmail,
      subject: 'Your NestFlex Quote is Ready!',
      body: body
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}