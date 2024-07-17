// // Admin Reports
// Route.group(() => {
//   Route.post('admin/reports', 'AdminReportsController.fetchReport')
//   Route.get('admin/users', 'SmiUsersController.index')
//   Route.post('admin/users', 'SmiUsersController.store')
//   Route.put('admin/users/:userId', 'SmiUsersController.update')
//   Route.delete('admin/users/:userId', 'SmiUsersController.destroy')
//   Route.get('admin/users/:userId/restore', 'SmiUsersController.restore')
//   Route.get('admin/users/:userId/password-setup', 'SmiUsersController.sendPasswordSetupEmail')
// })
//   .middleware('authenticate')
//   .where('userId', Route.matchers.number())

// //Accounts
// Route.group(() => {
//   Route.delete('accounts/logs/:logId', 'AccountLogsController.destroy')

//   Route.get('accounts/options', 'AccountsController.getAccountOptions')
//   Route.get('accounts/:id/logs', 'AccountLogsController.index')
//   Route.get('accounts/:id/users/:userId/logs', 'UserLogsController.index')
//   Route.get('accounts/:accountId/billing-contacts', 'UsersController.getAccountBillingContacts')

//   Route.post('accounts/table', 'AccountsController.table')
//   Route.post('accounts/:accountId/users', 'UsersController.getAccountUsers')
//   Route.post('accounts/:id/logs', 'AccountLogsController.store')
//   Route.post('accounts/:id/users/:userId/logs', 'UserLogsController.store')
//   Route.post('accounts/:id/projects', 'ProjectsController.getProjectsByAccountId')

//   Route.post('accounts/check-company-name', 'AccountsController.getIsCompanyNameTaken')

//   Route.resource('accounts', 'AccountsController').apiOnly()
// })
//   .middleware('authenticate')
//   .where('id', Route.matchers.number())
//   .where('logId', Route.matchers.number())
//   .where('userId', Route.matchers.number())

// //Admin
// Route.group(() => {
//   Route.post('admin/status-report', 'CurrentStatusesController.report')
// })
//   .middleware('authenticate')

// Route.group(() => {
//   Route.get('auto-search-blacklist', 'AutoSearchBlacklistsController.index')
//   Route.post('auto-search-blacklist', 'AutoSearchBlacklistsController.store')
//   Route.delete('auto-search-blacklist/:id', 'AutoSearchBlacklistsController.destroy')
// }).middleware('authenticate')

// // Calendar
// Route.post('calendar-events/check-date', 'CalendarEventsController.check')

// Route.group(() => {
//   Route.post('calendar-events/fetch', 'CalendarEventsController.index')
//   Route.post('calendar-events/fetch-range', 'CalendarEventsController.fetchRange')
//   Route.post('calendar-events', 'CalendarEventsController.store')
//   Route.patch('calendar-events', 'CalendarEventsController.update')
//   Route.delete('calendar-events/:id', 'CalendarEventsController.destroy')
// })
//   .where('orderId', Route.matchers.number())
//   .middleware('authenticate')

// // Categories
// Route.group(() => {
//   Route.get('categories', 'CategoriesController.index')
// })
//   .middleware('authenticate')

// // Collaborators
// Route.group(() => {
//   Route.get('collaborators/:orderId', 'CollaboratorsController.fetchCollaborators')
//   Route.post('collaborators/:orderId', 'CollaboratorsController.addCollaborator')
//   Route.delete('collaborators/:orderId/:userId', 'CollaboratorsController.removeCollaborator')
//   Route.get('collaborators/:orderId/invitations', 'CollaboratorsController.fetchInvitedCollaborators')
//   Route.delete('collaborators/:orderId/invitations/:invitationId', 'CollaboratorsController.removeInvitedCollaborator')
// })
//   .where('invitationId', Route.matchers.number())
//   .where('orderId', Route.matchers.number())
//   .where('userId', Route.matchers.number())
//   .middleware('authenticate')

// // Custom Request
// Route.group(() => {
//   Route.get('custom-requests', 'CustomRequestsController.index')
//   Route.post('custom-requests', 'CustomRequestsController.store')
//   Route.put('custom-requests/:requestId', 'CustomRequestsController.update')
//   Route.get('custom-requests/:requestId', 'CustomRequestsController.show')
//   Route.delete('custom-requests/:requestId', 'CustomRequestsController.destroy')
// })
//   .where('requestId', Route.matchers.number())
//   .middleware(['authenticate'])

// //Exports
// Route.group(() => {
//   Route.get('exports/type', 'ExportsController.type')
//   Route.get('exports/:exportId', 'ExportsController.show')
//   Route.get('exports/:exportId/account-data', 'ExportsController.getAccountData')
//   Route.get('exports/:exportId/create-trello-card', 'ExportsController.createTrelloCard')
//   Route.get('exports/:exportId/linked-requests', 'ExportsController.linkedRequests')
//   Route.get('exports/:exportId/pdfs/', 'ExportPdfController.index')
//   Route.get('exports/:exportId/project', 'ExportsController.getExportProject')
//   Route.get('exports/:exportId/sections', 'ExportSectionsController.index')
//   Route.get('exports/:exportId/status', 'ExportStatusesController.status')
//   Route.get('exports/:exportId/statuses', 'ExportStatusesController.statuses')
//   Route.get('exports/:exportId/uploads', 'ExportUploadsController.index')

//   // Export Data
//   Route.post('exports/:exportId/data', 'ExportPdfController.fetchData')

//   // Legacy Exports
//   Route.post('legacy/exports', 'LegacyPdfsController.getExportsTable').middleware(['authenticate'])
//   Route.get('legacy/exports/count', 'LegacyPdfsController.getExportsCount').middleware(['authenticate'])

//   // Legacy Reports
//   Route.post('legacy/reports', 'LegacyPdfsController.getReportsTable').middleware(['authenticate'])
//   Route.get('legacy/reports/count', 'LegacyPdfsController.getReportsCount').middleware(['authenticate'])

//   // Price Adjust
//   Route.patch('exports/:exportId/price-adjust', 'ExportsController.adjustPrice')
//   Route.get('exports/:exportId/price-data', 'ExportsController.getPriceData')

//   Route.post('exports', 'ExportsController.store')
//   Route.post('exports/table', 'ExportsController.table')

//   Route.post('exports/:exportId/:platformSectionId/upload', 'ExportUploadsController.uploadSection')
//   Route.post('exports/:exportId/:type/upload', 'ExportUploadsController.uploadMediaAndSource')

//   Route.post('exports/:exportId/upload-link', 'ExportUploadsController.getUploadLink')
//   Route.post('export-sections/resequence', 'ExportUploadsController.resequence')

//   Route.patch('exports/:exportId', 'ExportsController.update')
//   Route.patch('exports/:exportId/add-status', 'ExportStatusesController.addStatus')
//   Route.patch('exports/:exportId/delete-status', 'ExportStatusesController.deleteStatus')
//   Route.patch('exports/:exportId/set-hold-state', 'ExportsController.setHoldState')
//   Route.patch('exports/:exportId/set-overtime', 'ExportsController.setOvertime')
//   Route.patch('exports/:exportId/submit', 'ExportsController.submit')
//   Route.patch('exports/:exportId/release', 'ExportsController.release')
//   Route.patch('exports/:exportId/sections', 'ExportSectionsController.upsert')
//   Route.patch('export-uploads/:exportUploadId', 'ExportUploadsController.updateUploadMetaData')

//   Route.delete('exports/:exportId/media/:file', 'ExportMediaController.destroy')
//   Route.delete('exports/:exportId/source/:file', 'ExportSourceCodeController.destroy')
//   Route.delete('exports/:exportId/uploads/:platformSectionId/:file', 'ExportUploadsController.destroy')
//   Route.delete('export-uploads/:exportUploadId', 'ExportUploadsController.removeFileMetadata')
// })
//   .where('exportId', Route.matchers.number())
//   .where('exportSectionId', Route.matchers.number())
//   .where('platformSectionId', Route.matchers.number())
//   .where('exportUploadId', Route.matchers.number())
//   .where('type', /^(media|source)$/)
//   .middleware(['authenticate'])

// // Expertise
// Route.group(() => {
//   Route.get('expertise', 'ExpertiseController.index')
// })
//   .middleware(['authenticate'])

// // Expert Witnesses
// Route.group(() => {
//   Route.post('expert-witnesses/table', 'ExpertWitnessesController.table')
//   Route.post('expert-witnesses', 'ExpertWitnessesController.store')
//   Route.post('expert-witnesses/:expertWitnessId/request', 'ExpertWitnessesController.request')

//   Route.patch('expert-witnesses/:expertWitnessId', 'ExpertWitnessesController.update')

//   Route.delete('expert-witnesses/:expertWitnessId', 'ExpertWitnessesController.destroy')
// })
//   .where('expertWitnessId', Route.matchers.number())
//   .middleware(['authenticate'])

// // Files
// Route.group(() => {
//   Route.get('fetch-file', 'FileController.fetchFile')
// })
//   .middleware(['authenticate'])

// // Invite Users
// Route.post('accept-invite', 'InviteUsersController.acceptInvite')
// Route.get('fetch-invitation', 'InviteUsersController.fetchInvitation')

// // Invoicing
// Route.group(() => {
//   Route.post('invoices', 'InvoicesController.store')
//   Route.post('invoices/json-to-pdf', 'InvoicesController.jsonToPdf')
//   Route.delete('invoices/:invoiceId', 'InvoicesController.destroy')
//   Route.patch('invoices/:invoiceId', 'InvoicesController.update')
//   Route.patch('invoices/:invoiceId/send', 'InvoicesController.send')
//   Route.post('invoices/non-invoiced-items', 'InvoicesController.nonInvoicedItems')
//   Route.post('invoices/add-to-invoice', 'InvoicesController.addItemToInvoice')
//   Route.post('invoices/table', 'InvoicesController.table')
//   Route.post('invoices/unsent', 'InvoicesController.unsent')
//   Route.post('invoices/edit-item-price', 'InvoicesController.editItemPrice')
//   Route.post('invoices/remove-item', 'InvoicesController.removeItem')
//   Route.get('invoices/quickbooks-csv', 'InvoicesController.quickbooksCsv')
//   Route.get('invoices/:invoiceId', 'InvoicesController.show')
//   Route.get('invoices/:invoiceId/preview', 'InvoicesController.preview')
// })
//   .middleware(['authenticate'])

// Route.group(() => {
//   Route.delete('invitation/:invitationId', 'InviteUsersController.delete')
//   Route.patch('invitation/:invitationId', 'InviteUsersController.update')
//   Route.post('fetch-invitations', 'InviteUsersController.fetchInvitations')
//   Route.post('invite-user', 'InviteUsersController.invite')
// })
//   .where('invitationId', Route.matchers.number())
//   .middleware(['authenticate'])

// // Logs
// Route.group(() => {
//   Route.delete('export-logs/:logId', 'ExportLogsController.destroy')
//   Route.get('export-logs/:exportId', 'ExportLogsController.index')
//   Route.post('export-logs', 'ExportLogsController.store')
// })
//   .where('logId', Route.matchers.number())
//   .where('exportId', Route.matchers.number())
//   .middleware(['authenticate'])

// Route.group(() => {
//   Route.delete('report-logs/:logId', 'ReportLogsController.destroy')
//   Route.get('report-logs/:reportId', 'ReportLogsController.index')
//   Route.post('report-logs', 'ReportLogsController.store')
// })
//   .where('logId', Route.matchers.number())
//   .where('reportId', Route.matchers.number())
//   .middleware(['authenticate'])

// // Order Entry
// Route.group(() => {
//   Route.group(() => {
//     // Index
//     Route.get('deep-reports/:id/uploads', 'DeepReportUploadsController.index')

//     Route.get('deep-reports/:deepReportId/pdfs', 'DeepReportsReleaseController.index')
//     Route.post('deep-reports/table', 'DeepReportsController.table')

//     Route.get('orders/', 'DeepReportsController.index')
//     Route.get('orders/:orderId/contacts', 'BillingContactsController.index')
//     Route.get('orders/:orderId/expert-witness', 'OrderExpertWitnessController.index')
//     Route.get('relationships', 'RelationshipsController.index')

//     // Price Adjust
//     Route.patch('deep-reports/:deepReportId/price-adjust', 'DeepReportsController.adjustPrice')
//     Route.get('deep-reports/:deepReportId/price-data', 'DeepReportsController.getPriceData')

//     // Submit
//     Route.patch('deep-reports/:deepReportId/submit', 'DeepReportsController.submit')

//     Route.get('deep-reports/:deepReportId/account-data', 'DeepReportsController.getAccountData')
//     Route.get('deep-reports/:deepReportId/auto-search-queries', 'AutoSearchQueriesController.index')
//     Route.get('deep-reports/:deepReportId/auto-search-queries/clear', 'AutoSearchQueriesController.clear')
//     Route.get('deep-reports/:deepReportId/create-trello-card', 'DeepReportsController.createTrelloCard')
//     Route.get('deep-reports/:deepReportId/linked-requests', 'DeepReportsController.linkedRequests')
//     Route.get('deep-reports/:deepReportId/findings', 'DeepReportFindingsController.index')
//     Route.get('deep-reports/:deepReportId/max-sequence', 'DeepReportFindingsController.getMaxSequence')

//     // Subjects
//     Route.get('subjects/:id/addresses', 'SubjectAddressesController.index')
//     Route.get('subjects/:id/aliases', 'SubjectAliasesController.index')
//     Route.get('subjects/:id/educational-institutions', 'SubjectEducationalInstitutionsController.index')
//     Route.get('subjects/:id/emails', 'SubjectEmailsController.index')
//     Route.get('subjects/:id/employees', 'SubjectEmployeesController.index')
//     Route.get('subjects/:id/employers', 'SubjectEmployersController.index')
//     Route.get('subjects/:id/phone-numbers', 'SubjectPhoneNumbersController.index')
//     Route.get('subjects/:id/relationships', 'SubjectRelationshipsController.index')
//     Route.get('subjects/:id/surnames', 'SubjectSurnamesController.index')
//     Route.get('subjects/:id/urls', 'SubjectUrlsController.index')
//     Route.get('subjects/:subjectId/employee-urls', 'SubjectEmployeeUrlsController.indexBySubject')
//     Route.get('subjects/:subjectId/relationship-urls', 'SubjectRelationshipUrlsController.indexBySubject')

//     // Rush Orders
//     Route.post('orders/check-rush-status', 'OrdersController.checkRushStatus')

//     // Show
//     Route.get('deep-reports/:id', 'DeepReportsController.show')
//     Route.get('deep-reports/:id/case-notes', 'DeepReportsController.getCaseNotes')
//     Route.get('deep-reports/:deepReportId/status', 'DeepReportStatusesController.status')
//     Route.get('deep-reports/:deepReportId/statuses', 'DeepReportStatusesController.statuses')
//     Route.get('deep-reports/:deepReportId/workflow-steps', 'DeepReportsController.workflowSteps')

//     Route.get('orders/:id', 'OrdersController.show')
//     Route.get('subjects/:id', 'SubjectsController.show')
//   })
//     .where('id', Route.matchers.number())
//     .where('orderId', Route.matchers.number())
//     .where('deepReportId', Route.matchers.number())

//   Route.group(() => {
//     // Store
//     Route.post('deep-reports/', 'DeepReportsController.store')

//     Route.post('deep-reports/:id/uploads', 'DeepReportUploadsController.store')
//     Route.post('deep-reports/:id/upload-link', 'DeepReportUploadsController.getUploadLink')

//     Route.post('deep-reports/:deepReportId/auto-search-queries', 'AutoSearchQueriesController.store')

//     Route.post('findings/', 'DeepReportFindingsController.store')
//     Route.post('deep-reports/:deepReportId/findings/:findingId/resequence', 'DeepReportFindingsController.resequence')
//     Route.post('findings/:findingId/tags/:tagId', 'FindingTagsController.store')

//     Route.post('orders/', 'OrdersController.store')
//     Route.post('orders/:id/contacts', 'BillingContactsController.store')

//     Route.post('subjects/', 'SubjectsController.store')
//     Route.post('subjects/:id/addresses', 'SubjectAddressesController.store')
//     Route.post('subjects/:id/aliases', 'SubjectAliasesController.store')
//     Route.post('subjects/:id/educational-institutions', 'SubjectEducationalInstitutionsController.store')
//     Route.post('subjects/:id/emails', 'SubjectEmailsController.store')
//     Route.post('subjects/:id/employees', 'SubjectEmployeesController.store')
//     Route.post('subjects/:id/employers', 'SubjectEmployersController.store')
//     Route.post('subjects/:id/phone-numbers', 'SubjectPhoneNumbersController.store')
//     Route.post('subjects/:id/relationships', 'SubjectRelationshipsController.store')
//     Route.post('subjects/:id/surnames', 'SubjectSurnamesController.store')
//     Route.post('subjects/:id/urls', 'SubjectUrlsController.store')
//     Route.post('subject-employees/:subjectEmployeeId/urls', 'SubjectEmployeeUrlsController.store')
//     Route.post('subject-relationships/:subjectRelationshipId/urls', 'SubjectRelationshipUrlsController.store')

//     // Update
//     Route.patch('deep-reports/:id', 'DeepReportsController.update')
//     Route.patch('deep-reports/:deepReportId/add-status', 'DeepReportStatusesController.addStatus')
//     Route.patch('deep-reports/:deepReportId/delete-status', 'DeepReportStatusesController.deleteStatus')
//     Route.patch('deep-reports/:deepReportId/set-hold-state', 'DeepReportsController.setHoldState')
//     Route.patch('deep-reports/:deepReportId/set-overtime', 'DeepReportsController.setOvertime')
//     Route.patch('deep-reports/:deepReportId/toggle', 'DeepReportsController.toggleResearchBundle')

//     Route.patch('findings/:findingId', 'FindingsController.update')

//     Route.patch('orders/:id', 'OrdersController.update')
//     Route.patch('orders/:orderId/toggle-test', 'OrdersController.toggleTest')

//     Route.put('billing-contacts/:id', 'BillingContactsController.update')

//     Route.patch('subjects/:id', 'SubjectsController.update')
//     Route.patch('subjects/:subjectId/addresses', 'SubjectAddressesController.updateMany')
//     Route.put('subjects/:subjectId/addresses/:id', 'SubjectAddressesController.update')
//     Route.patch('subjects/:subjectId/aliases', 'SubjectAliasesController.updateMany')
//     Route.put('subjects/:subjectId/aliases/:id', 'SubjectAliasesController.update')
//     Route.patch('subjects/:subjectId/educational-institutions', 'SubjectEducationalInstitutionsController.updateMany')
//     Route.put('subjects/:subjectId/educational-institutions/:id', 'SubjectEducationalInstitutionsController.update')
//     Route.patch('subjects/:subjectId/emails', 'SubjectEmailsController.updateMany')
//     Route.put('subjects/:subjectId/emails/:id', 'SubjectEmailsController.update')
//     Route.patch('subjects/:subjectId/employees', 'SubjectEmployeesController.updateMany')
//     Route.put('subjects/:subjectId/employees/:id', 'SubjectEmployeesController.update')
//     Route.patch('subjects/:subjectId/employers', 'SubjectEmployersController.updateMany')
//     Route.put('subjects/:subjectId/employers/:id', 'SubjectEmployersController.update')
//     Route.patch('subjects/:subjectId/phone-numbers', 'SubjectPhoneNumbersController.updateMany')
//     Route.put('subjects/:subjectId/phone-numbers/:id', 'SubjectPhoneNumbersController.update')
//     Route.patch('subjects/:subjectId/relationships', 'SubjectRelationshipsController.updateMany')
//     Route.put('subjects/:subjectId/relationships/:id', 'SubjectRelationshipsController.update')
//     Route.patch('subjects/:subjectId/surnames', 'SubjectSurnamesController.updateMany')
//     Route.put('subjects/:subjectId/surnames/:id', 'SubjectSurnamesController.update')
//     Route.put('subjects/:subjectId/urls/:id', 'SubjectUrlsController.update')
//     Route.put('subject-employee-urls/:subjectEmployeeUrlId', 'SubjectEmployeeUrlsController.update')
//     Route.put('subject-relationship-urls/:subjectRelationshipUrlId', 'SubjectRelationshipUrlsController.update')
//   })
//     .where('id', Route.matchers.number())
//     .where('deepReportId', Route.matchers.number())
//     .where('findingId', Route.matchers.number())
//     .where('orderId', Route.matchers.number())
//     .where('orderId', Route.matchers.number())
//     .where('subjectId', Route.matchers.number())
//     .where('subjectRelationshipUrlId', Route.matchers.number())

//   Route.group(() => {
//     // Delete
//     Route.delete('auto-search-queries/:autoSearchQueryId', 'AutoSearchQueriesController.destroy')
//     Route.delete('auto-search-results/:autoSearchResultId', 'AutoSearchResultsController.destroy')

//     Route.delete('deep-reports/:id', 'DeepReportsController.destroy')
//     Route.delete('deep-reports/:id/uploads/:file', 'DeepReportUploadsController.destroy')

//     Route.delete('exports/:id', 'ExportsController.destroy')

//     Route.delete('findings/:findingId', 'FindingsController.destroy')
//     Route.delete('findings/:findingId/tags/:tagId', 'FindingTagsController.destroy')

//     Route.delete('billing-contacts/:id', 'BillingContactsController.destroy')

//     Route.delete('subjects/:id', 'SubjectsController.destroy')
//     Route.delete('subjects/:subjectId/addresses/:id', 'SubjectAddressesController.destroy')
//     Route.delete('subjects/:subjectId/aliases/:id', 'SubjectAliasesController.destroy')
//     Route.delete('subjects/:subjectId/educational-institutions/:id', 'SubjectEducationalInstitutionsController.destroy')
//     Route.delete('subjects/:subjectId/emails/:id', 'SubjectEmailsController.destroy')
//     Route.delete('subjects/:subjectId/employees/:id', 'SubjectEmployeesController.destroy')
//     Route.delete('subjects/:subjectId/employers/:id', 'SubjectEmployersController.destroy')
//     Route.delete('subjects/:subjectId/phone-numbers/:id', 'SubjectPhoneNumbersController.destroy')
//     Route.delete('subjects/:subjectId/relationships/:id', 'SubjectRelationshipsController.destroy')
//     Route.delete('subjects/:subjectId/surnames/:id', 'SubjectSurnamesController.destroy')
//     Route.delete('subjects/:subjectId/urls/:id', 'SubjectUrlsController.destroy')
//     Route.delete('subject-employee-urls/:subjectEmployeeUrlId', 'SubjectEmployeeUrlsController.destroy')
//     Route.delete('subject-relationship-urls/:subjectRelationshipUrlId', 'SubjectRelationshipUrlsController.destroy')
//   })

//   Route.group(() => {
//     // Restore
//     Route.get('auto-search-queries/:autoSearchQueryId/restore', 'AutoSearchQueriesController.restore')
//     Route.get('auto-search-results/:autoSearchResultId/restore', 'AutoSearchResultsController.restore')

//     Route.get('deep-reports/:id/restore', 'DeepReportsController.restore')

//     Route.get('exports/:id/restore', 'ExportsController.restore')
//   })
// })
//   .where('id', Route.matchers.number())
//   .where('deepReportId', Route.matchers.number())
//   .where('orderId', Route.matchers.number())
//   .where('orderId', Route.matchers.number())
//   .where('subjectId', Route.matchers.number())
//   .middleware('authenticate')

// // Deep Report Workspace Screenshots
// Route.group(() => {
//   Route.delete('deep-reports/:deepReportId/summary-screenshots/:file', 'DeepReportSummaryScreenshotController.destroy')
//   Route.delete('findings/:findingId/findings-screenshot', 'FindingsScreenshotController.destroy')

//   Route.post('deep-reports/:deepReportId/summary-screenshots', 'DeepReportSummaryScreenshotController.store')
//   Route.post('deep-reports/:deepReportId/upload-screenshot-link', 'FindingsScreenshotController.getUploadLink')

//   Route.post(
//     'deep-reports/:deepReportId/summary-screenshot-link',
//     'DeepReportSummaryScreenshotController.getUploadLink'
//   )
// })
//   .where('deepReportId', Route.matchers.number())
//   .where('findingId', Route.matchers.number())
//   .middleware('authenticate')

// // Convergence
// Route.group(() => {
//   Route.post('convergence/search', 'ConvergenceController.search')
//   Route.post('convergence/add-to-findings', 'ConvergenceController.addToFindings')
// })
//   .middleware('authenticate')

// // Pipl
// Route.group(() => {
//   Route.post('pipl/search', 'PiplSearchController.search')
// })
//   .middleware('authenticate')

// //Platforms
// Route.group(() => {
//   Route.get('platforms', 'PlatformTypesController.index')
//   Route.get('platforms/:platformTypeId/sections', 'PlatformSectionsController.sections')
//   Route.get('platforms/statuses', 'PlatformSectionsController.statuses')
// })
//   .where('platformTypeId', Route.matchers.number())
//   .middleware('authenticate')

// // Products
// Route.group(() => {
//   Route.get('products', 'ProductsController.index')
//   Route.post('products/monthly-summary', 'ProductsController.monthlySummary')
// })
//   .middleware(['authenticate'])

// // Projects
// Route.group(() => {
//   Route.get('projects/', 'ProjectsController.index')
//   Route.post('projects/', 'ProjectsController.store')
//   Route.get('projects/:projectId', 'ProjectsController.show')
//   Route.put('projects/:projectId', 'ProjectsController.update')
//   Route.delete('projects/:projectId', 'ProjectsController.destroy')
//   Route.post('projects/table', 'ProjectsController.table')
// })
//   .where('projectId', Route.matchers.number())
//   .middleware(['authenticate'])

// // Statuses
// Route.group(() => {
//   Route.get('statuses', 'StatusesController.index')
// }).middleware('authenticate')
//   .where('deepReportId', Route.matchers.number())

// // Tags
// Route.group(() => {
//   Route.get('tags', 'TagsController.index')
// })
//   .middleware('authenticate')

// //Users
// Route.group(() => {
//   Route.delete('users/:userId', 'UsersController.destroy')
//   Route.delete('users/logs/:logId', 'UserLogsController.destroy')

//   Route.get('users', 'UsersController.index')
//   Route.get('users/:userId', 'UsersController.show')
//   Route.get('users/:userId/is-setup-complete', 'UsersController.isSetupComplete')
//   Route.get('users/:userId/password-setup', 'UsersController.sendPasswordSetupEmail')
//   Route.get('users/:userId/projects', 'UsersController.getProjectsByUser')
//   Route.get('users/:userId/restore', 'UsersController.restore')

//   Route.post('users/table', 'UsersController.table')
//   Route.post('users', 'UsersController.store')
//   Route.post('users/check-email', 'UsersController.checkEmail')
//   Route.post('users/update-password', 'UsersController.updatePassword')

//   Route.put('users/:userId', 'UsersController.update')
// })
//   .middleware('authenticate')
//   .where('userId', Route.matchers.number())
//   .where('logId', Route.matchers.number())

// Route.post('users/setup-account', 'UsersController.setupAccount')

// //Reports
// Route.group(() => {
//   Route.get('reports/employment/:id', 'EmploymentReportController.get')
//   Route.get('reports/deep-report/:deepReportId', 'DeepReportController.preview')
//   Route.get('reports/deep-report/:deepReportId/release', 'DeepReportController.release')
// })
//   .middleware('authenticate')
//   .where('deepReportId', Route.matchers.number())