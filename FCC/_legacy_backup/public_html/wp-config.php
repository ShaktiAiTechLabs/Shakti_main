<?php
# BEGIN WP Cache by 10Web
define( 'WP_CACHE', true );
define( 'TWO_PLUGIN_DIR_CACHE', '/home/fccindi3/public_html/wp-content/plugins/tenweb-speed-optimizer/' );
# END WP Cache by 10Web
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fccindi3_awp220' );
/** Database username */
define( 'DB_USER', 'fccindi3__wp220' );
/** Database password */
define( 'DB_PASSWORD', '2S34p]2C7)' );
/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e6w4pvw2yutb4ohermfabr9lvvgwfjkmeb3v3hyrbeceqeimn6hto0ljxdycdxlo' );
define( 'SECURE_AUTH_KEY',  'xcphefjuvk3aatl9nj8enxtcyydppnu3v1xdzekrxeopdadkh8eldwz10jsblwgh' );
define( 'LOGGED_IN_KEY',    'hgrnw1egurje04uwneczoygnpsi3ygvmckm0opwewkcqbpabgwyrpgxmxdaoam12' );
define( 'NONCE_KEY',        'g9dj3ljkscl2e7magupwbptvysmw2lsysnhe4k5buqdqwxj0bjaamgcgavtzigqd' );
define( 'AUTH_SALT',        'ftotzzjptlhaohwyxcbbn686mqlbpzbkmqp1bc0qwvik3dnahfx4bucvzl0a25vb' );
define( 'SECURE_AUTH_SALT', '6nwtgqy6malgnt9mkcrpmamg3apoumskzxc1mdf4miafahsxrjvel5hoeyermcne' );
define( 'LOGGED_IN_SALT',   'ptg3ihrvsqinks5zdg57t15snuw2whhrpqa65q1agce2aeurl0eo2dwaoh4ove3w' );
define( 'NONCE_SALT',       'tphfgttqbrtao6j9dj4mn0jp3vyx8zm698uh7irodzh7mkxsn5l76hxzw1ajps6b' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpvb_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );
/* Add any custom values between this line and the "stop editing" line. */
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '256M');
set_time_limit(120);
define( 'DISALLOW_FILE_EDIT', true );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';