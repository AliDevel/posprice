app_name = "posprice1"
app_title = "Pos Price app"
app_publisher = "Alimerdan "
app_description = "Price"
app_email = "alimerdanrahimov@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/posprice1/css/posprice1.css"
# app_include_js = "/assets/posprice1/js/posprice1.js"

# include js, css files in header of web template
# web_include_css = "/assets/posprice1/css/posprice1.css"
# web_include_js = "/assets/posprice1/js/posprice1.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "posprice1/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "posprice1.utils.jinja_methods",
# 	"filters": "posprice1.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "posprice1.install.before_install"
# after_install = "posprice1.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "posprice1.uninstall.before_uninstall"
# after_uninstall = "posprice1.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "posprice1.utils.before_app_install"
# after_app_install = "posprice1.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "posprice1.utils.before_app_uninstall"
# after_app_uninstall = "posprice1.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "posprice1.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"posprice1.tasks.all"
# 	],
# 	"daily": [
# 		"posprice1.tasks.daily"
# 	],
# 	"hourly": [
# 		"posprice1.tasks.hourly"
# 	],
# 	"weekly": [
# 		"posprice1.tasks.weekly"
# 	],
# 	"monthly": [
# 		"posprice1.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "posprice1.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "posprice1.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "posprice1.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["posprice1.utils.before_request"]
# after_request = ["posprice1.utils.after_request"]

# Job Events
# ----------
# before_job = ["posprice1.utils.before_job"]
# after_job = ["posprice1.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"posprice1.auth.validate"
# ]
