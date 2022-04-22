@@ -117,8 +117,8 @@ $(function () { // Same as document.addEventListener("DOMContentLoaded"...
        // Hint: you need to surround the chosen category short name with something before inserting
        // it into the home html snippet.
        //
        chosenCategoryShortName = "'" + chosenCategoryShortName + "'";
        var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", chosenCategoryShortName);

        var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", "'" + chosenCategoryShortName + "'");
