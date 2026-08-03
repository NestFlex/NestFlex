function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Oracle 3D Architectural Systems | Only Realty')
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
      subject: 'Your Requested Document' + (docs.length > 1 ? 's' : '') + ' - Oracle 3D',
      body: 'Hi,\n\nAs requested, here ' + (docs.length > 1 ? 'are the links' : 'is the link') + ':\n\n' + lines +
        '\n\nIf you have any questions, reply directly to this email or contact Jacques La Grange at jacques@onlyrealty.co.za.\n\nOnly Realty Property Group'
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}