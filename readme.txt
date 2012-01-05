=== Plugin Name ===
Contributors: Storify
Tags: storify, social media, embed
Requires at least: 3.2
Tested up to: 3.4
Stable tag: 1.0

Brings the power of Storify, the popular social media embedding tool to your WordPress site

== Description ==

Turn what people post on social networks into compelling stories. With [Storify](http://storify.com), you collect the best photos, video, Tweets and more from around the web and publish them as simple, beautiful stories embedded into your WordPress posts and pages. It's the best way to chronicle an event through what people share, whether it's a conference, wedding, election or natural disaster.

**Features:**

* Embed stories with ease &mdash; simply paste the URL to the story, and WordPress takes care of the rest.
* Easily add your stories to posts &mdash; just click the Storify button in the standard WordPress editor, and select from a list of your most recent stories.
* Create new stories and edit existing ones right from your WordPress dashboard.
* Adds SEO-friendly versions of your stories to each post, ensuring that your stories get properly index by search engines 
* Allows users with filtered html restrictions to embed stories.
* Extensive API to customize the plugin's functionality to meet your needs

== Installation ==

Simply search for the plugin via the plugins -> add new dialog and click install, or download and extract the plugin, and copy the the Storify plugin folder into your wp-content/plugins directory and activate.

== Frequently Asked Questions ==

= Do I need a Storify account to use this plugin? =

You'll need a Storify account to use all of the plugin's features. If you don't already have an account you can [sign up now](http://storify.com) using your Facebook or Twitter account, otherwise, you will be prompted to create an account prior to publishing your first story.*

= I am a developer, can I customize the functionality of the plugin? =

Yes. There are more than 20 API endpoints for developers to hook into using WordPress's standard `add_action()` and `add_filter()` architecture. Each is individually documented within the code itself, but virtually all the plugin's functionality can be customized to fit your needs.

= Can I extend the plugin's functionality or integrate it with my own, existing plugin? =

Yes. There are several public methods available to help developers quickly and easily leverage the Storify API such as `get_story()` and `get_user_data()`. Each is documented more thoroughly within the code itself, and can be called, for example, as `$WP_Storify->get_story( 'http://storify.com/url-to/a-story' );` to return a story object containing the story's embed code and associated metadata.

= Are requests to the Storify API cached at all? =

Yes. All requests to the Storify API (for user and story metadata) are cached using the standard WordPress transients API. By default, this will cache the requests to the database for up to an hour, but can be customized and extended through many popular caching plugins such as W3 Total Cache. There is also an API hook to modify the default TTL (`storify_ttl`);

== Changelog ==

= 1.0 =
* Initial Release