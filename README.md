<h3>Feature 2: Show/Hide Event Details</h3>
<br>
<p>Scenario 1: An event element is collapsed by default</p>
<p>Given user has not selected an event</p>
<p>When user sees event for the first time</p>
<p>Then event element should be collapsed by default</p>
<br>
<p>Scenario 2: User can expand an event to see details</p>
<p>Given user has not expanded event details</p>
<p>When user clicks on event details</p>
<p>Then user should see details</p>
<br>
<p>Scenario 3: User can collapse an event to hide details</p>
<p>Given user has expanded see details</p>
<p>When user clicks hide details</p>
<p>Then event details should collapse</p>
<br>
<h3>Feature 3: Specify Number of Events</h3>
<br>
<p>Scenario 1: When user hasn’t specified a number, 32 events are shown by default</p>
<p>Given user has not specified a number</p>
<p>When user sees events</p>
<p>Then 32 events are shown by default</p>
<br>
<p>Scenario 2: User can change the number of events displayed</p>
<p>Given user is looking at events</p>
<p>When user selects X number of events</p>
<p>Then X number of events are displayed</p>
<br>
<h3>Feature 4: Use the App When Offline</h3>
<br>
<p>Scenario 1: Show cached data when there’s no internet connection</p>
<p>Given there is no internet connection</p>
<p>When user tries to interact with application offline</p>
<p>Then show cached data</p>
<br>
<p>Scenario 2: Show error when user changes search settings (city, number of events)</p>
<p>Given there is no internet connection</p>
<p>When user tries to change search settings</p>
<p>Then show error</p>
<br>
<h3>Feature 5: Add an App Shortcut to the Home Screen</h3>
<br>
<p>Scenario 1: User can install the meet app as a shortcut on their device home screen</p>
<p>Given does not have app installed</p>
<p>When user installs app</p>
<p>Then add shortcut on their device home screen</p>
<br>
<h3>Feature 6: Display Charts Visualizing Event Details</h3>
<br>
<p>Scenario 1: Show a chart with the number of upcoming events in each city</p>
<p>Given user is looking for events</p>
<p>When user is searching for events in a city</p>
<p>Then show number of upcoming events</p>

