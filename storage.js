

<script type="text/javascript" charset="utf-8" src="cordova.osx.js"></script>

// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Populate the database 
    //
    function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS PETS (id unique, data)');
        tx.executeSql('INSERT INTO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO (id, data) VALUES (2, "Second row")');
		tx.executeSql('INSERT INTO (id, data) VALUES (3, "Third row")');
        tx.executeSql('INSERT INTO (id, data) VALUES (4, "Fourth row")');
        tx.executeSql('INSERT INTO (id, data) VALUES (5, "Fifth row")');

    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM PETS', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("PETS table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
        }
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "Cordova Pets", 200000);
        db.transaction(queryDB, errorCB);
    }

    // Cordova is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Pets", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    </script>



