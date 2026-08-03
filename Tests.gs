/**
 * Unit tests for Code.gs functions.
 * Run these functions in the Apps Script editor to verify logic.
 */

function runTests() {
  testEmailDocumentLinks_NoRecipient();
  testEmailDocumentLinks_NoDocs();
  testEmailDocumentLinks_Success();
  console.log('All tests completed.');
}

function testEmailDocumentLinks_NoRecipient() {
  console.log('Running testEmailDocumentLinks_NoRecipient...');
  var result = emailDocumentLinks('', [{title: 'Test', url: 'http://test.com'}]);
  if (result.success === false && result.message === 'Missing recipient email') {
    console.log('PASSED');
  } else {
    console.error('FAILED', result);
  }
}

function testEmailDocumentLinks_NoDocs() {
  console.log('Running testEmailDocumentLinks_NoDocs...');
  var result = emailDocumentLinks('test@example.com', []);
  if (result.success === false && result.message === 'No documents to send') {
    console.log('PASSED');
  } else {
    console.error('FAILED', result);
  }
}

function testEmailDocumentLinks_Success() {
  console.log('Running testEmailDocumentLinks_Success...');
  // Note: This will actually try to send an email if run in a real Apps Script environment.
  // In a mock environment, it might fail or we might need to mock MailApp.
  try {
    var result = emailDocumentLinks('test@example.com', [{title: 'Test Doc', url: 'http://example.com/doc'}]);
    if (result.success === true) {
      console.log('PASSED');
    } else {
      console.warn('FAILED (Expected success, but might have failed due to environment)', result);
    }
  } catch (e) {
    console.error('EXCEPTION', e);
  }
}
