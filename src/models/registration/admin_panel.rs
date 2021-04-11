//! # Registering models for the admin panel.
//!

use mango_orm::ToModel;
use serde_json::{json, Value};

use crate::models::services::admin::users;

// Register models.
// *************************************************************************************************
// Hint: get icon name - https://materialdesignicons.com/
// Hint: doc_name - {"field": "field_name", "title": "Table header"}
// ( field_name - only text field )
pub fn service_list() -> Value {
    json!([
            // Users
            {
                "service": { "title": "Users", "icon": "account-multiple" },
                "collections": [
                    { "title": "Users",
                      "model_key": users::User::key(),
                      "doc_name": { "field": "username", "title": "Nickname" } },
                ]
            },
            // Other service
        ]
    )
}

// CKEditor configuration
// *************************************************************************************************
pub fn config_ckeditor() -> Value {
    json!(
        {
            "toolbar": {
                "items": [
                    "heading", "|",
                    "textPartLanguage", "|",
                    "alignment", "|",
                    "bold", "italic", "underline", "strikethrough", "|",
                    "subscript", "superscript", "|",
                    "fontColor", "fontBackgroundColor", "fontFamily", "|",
                    "bulletedList", "numberedList", "todoList", "|",
                    "-",
                    "outdent", "indent", "|",
                    "blockQuote", "highlight", "|",
                    "pageBreak", "removeFormat", "selectAll", "|",
                    "link", "specialCharacters", "insertTable", "mediaEmbed", "horizontalLine", "code", "codeBlock", "|",
                    "undo",
                    "redo"
                ],
                "table": {
                    "contentToolbar": ["tableColumn", "tableRow", "mergeTableCells"]
                },
                "shouldNotGroupWhenFull": true
            }
       }
    )
}
