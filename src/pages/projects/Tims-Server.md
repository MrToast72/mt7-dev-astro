---
layout: ../../layouts/BlogPosts.astro
href: /projects/Tims-Server
classes: contentBoxes 
title: Timatteo's Home Server
date: 20-07-2023
discription: A guide on how to setup your own home server, targeted towards my good friend Tim.
body: 
---



# Required-Stuff
---
There is going to be a small list of things to do before we setup your new home server, anything that seems foreign or you dont understand it, just wait until we set up everything else together and i'll help you through it.
1. Buy a website domain, something that's easy to remember for you but not common for other people. I choose [mt7.dev](https://mt7.dev), m is for mr, t is for toast, and 7 is for 72, essentially spelling mrtoast72.dev.
     Domain sites I would recommend would be [cloudflare](https://www.cloudflare.com/products/registrar/) or [namecheap](https://www.namecheap.com/) as they offer no markups and make our life a little easier.
     
|  Registar  |    Domain Name    |  Time  | Price  |
|:----------:|:-----------------:|:------:|:------:|
| Cloudflare | timsafespace.dev  | 1 Year | $10.18 |
| Namecheap  | timesafespace.dev | 1 Year | $12.98 |
| Cloudflare |  timsdomain.dev   | 1 Year | $10.18 |
| Namecheap  |  timsdomain.dev   | 1 Year | $12.98 |
| Cloudflare |   timshome.dev    | 1 Year | $10.18 |
| Namecheap  |   timshome.dev    | 1 Year | $12.98 |

2. Take out your old computer or hardware from their boxes and make sure everything looks good, if you can, give everything a once over clean as you wont be touching this computer for a long time once were done. 

3. Make sure you have an ethernet cable available to plug in your server while we set it up, having stuff drop out or slow down because of wifi interference can be a pain to troubleshoot.
   
4. Create a spare Gmail, were going to use this to send out emails from the services were running. This can be something like a password reset or a notification that someone logged into something.

5. Buy a VPN, my recommendation is [ProtonVPN](https://protonvpn.com/) as it's fast, secure, no logs and based in Switzerland, however we can use any service out there. I would say to stay away from places like [PIA](https://www.privateinternetaccess.com/) and [NordVPN](https://nordvpn.com/), These very popular vpns are based in the US and even though they say no logs are kept, big brother is still always watching and has been known to tap specifically PIA. Just make sure whatever you buy, is not stored in the US or Canada, and says it does not keep any logs.

*Please note, that all the links in the Services/Apps List section are to the websites of said service. To actually setup what we need, look to the Docker section below.*



## Services/Apps-List
---
- [Pi-Hole Docker](https://pi-hole.net/) - Network-Wide Ad Blocking: This service acts as your DNS (Domain Name Service) and intercepts all outgoing traffic from your home network. Based on blocking lists we add, it will remove some of the websites that are requested from the request its self. It then serves the website minus what was removed to the device that requested it in the first place.
- [Tailscale](https://tailscale.com/) - Secure remote access VPN: This service runs on your home server and allows you to tunnel traffic from any device you want, lets use your phone for example, back to your server at home. If your running Pi-Hole at home, this would allow you to use that DNS blocker anywhere you go from any device. It also allows you to access things like files stored on your server at home.
- [Bitwarden Docker](https://bitwarden.com/) - Secure Password Manager: Small Docker app that runs your password manager. There is a lot to this password manager that I can't all go over, so feel free to check it out before hand.
- [Plex Docker](https://www.plex.tv/en-ca/) - Netflix like media streamer: This service allows you to stream any content from your home server or pc, whether that's movies, tv shows, anime, or music, all of it will be in one place and easily accessible. 
- [Radarr Docker](https://radarr.video/#home) - Movie Finder: This service is a little harder to explain what it does, but essentially you put what movie you want into it, and it scrapes the internet for a peer to peer download of that movie.
- [Sonarr Docker](https://sonarr.tv/) - TV Show Finder: This service works like Radarr, just only for tv shows. You put what show you want to watch into it, and it searches the internet for you.
- [Lidarr Docker](https://lidarr.audio/) - Music Finder: This service works like the last two, just only for music.
- [Jackett Docker](https://github.com/Jackett/Jackett) - Torrent Tracker: This service works by tracking a large amount of torrent sites and what they have on them. It goes hand and hand with Radarr, Sonarr, and Lidarr.
- [qBittorrent](https://www.qbittorrent.org/) - Torrent Application: This service is what actually does the peer-to-peer connections and downloads the torrents we want.
- [Portainer Docker](https://www.portainer.io/) - Docker Manager: This service allows us easy management of our docker containers and services.


## To-Do
---
- [x] Install Debian Linux onto the server, make sure everything is up to date.
- [ ] Install and setup Windows SMB service to allow direct access to files on the server.
- [ ] install and setup Tailscale on both the server and any device you would like to connect too.
- [x] Install and setup Docker, make sure permissions are set correctly.
- [x] Install and setup Portainer.
- [ ] Install and setup all docker containers. 


## Xfinity-Bridge-mode
---
Typically, two pieces of equipment are required to connect to the internet and the WiFi network in your home:

-   A **modem** connects your home to an Internet Service Provider's (e.g., Comcast's) network.
-   A **router** connects your wired and wireless devices to your modem.

The Xfinity Wireless Gateway puts the technology of a modem and router into one piece of equipment, creating the fastest, most reliable in-home WiFi.

We understand, however, that there may be times when you may want to use your own router.

To do this on our network, you'll have to enable the **Bridge Mode** feature on your wireless gateway, which turns off its routing capabilities while leaving the modem capabilities on. Then, you may connect and use your own router.

**Note:** Any ethernet port can be used but only one device can be connected to the gateway while in Bridge Mode.

When Bridge Mode is enabled, you can access the Xfinity app to manage your account, but you won’t be able to use Xfinity xFi and xFi Pods features to manage and personalize your network. [Learn the advantages of xFi](https://www.xfinity.com/support/articles/xfinity-xfi-overview).

If you're a customer with xFi Advanced Security, you won't be able to access this feature if you choose to enable Bridge Mode on your gateway. [Learn more about xFi Advanced Security](https://xfinity.com/support/articles/getting-started-with-xfinity-xfi-advanced-security).

In addition, if you already activated xFi Pods, you won't be able to enable Bridge Mode. Learn more about [network settings required with xFi Pods](https://www.xfinity.com/support/articles/xfi-pods-faqs).

Enabling Bridge Mode doesn't disable the Xfinity WiFi Home Hotspot feature (available on some gateways). Learn more about [turning your Xfinity WiFi Home Hotspot on or off](http://www.xfinity.com/support/internet/disable-xfinity-wifi-home-hotspot).

### Toggle Bridge Mode On/Off

1.  Using a device connected to your home network, open a web browser and go to the **Admin Tool** at [http://10.0.0.1](http://10.0.0.1/).
    -   If you're disabling bridge mode, this device must be connected to your gateway with an Ethernet cable.
2.  Enter the default username and password:
    -   Username: **admin**
    -   Password: **password** (case sensitive)
    -   **Note:** If you previously changed your **Admin Tool** password, use the new password to log in.  
        ![Admin Tool Login Screen with Username and Password fields in the middle and Login button at the bottom. ](https://secure.xfinity.com/anon.comcastonline2/support/help/faqs/wireless_gateway/HOW8383_image001.png)
3.  From the left-hand column, select **Gateway > At a Glance**.
4.  Next to **Bridge Mode**, click **Enable**.  
    ![Gateway at a Glance screen with Wifi SSID and Passkey displaying.](https://secure.xfinity.com/anon.comcastonline2/support/help/faqs/wireless_gateway/HOW8383_4132017_01.png)
5.  You'll see a message: "_WARNING: Enabling Bridge Mode will disable Router functionality of Gateway and turn off the private WiFi network. Are you sure you want to continue?_" Click **OK** to confirm.
    
    **Note:** Your wireless gateway may restart.  
    ![Warning dialog box informing user about Enabling Bridge mode](https://secure.xfinity.com/anon.comcastonline2/support/help/faqs/wireless_gateway/HOW8383_4132017_02.png)
    
6.  You can now use your own router in place of the Wireless Gateway's router capabilities.
7.  Click **Logout** at the top right.
8.  Connect your personal router to any of the Ethernet **ports** on the Xfinity Wireless Gateway.
9.  If you want to use your gateway's router capabilities in the future:
    -   Log in to the **Admin Tool** and navigate to **Gateway > At a Glance**.
    -   Set the **Bridge Mode** field to **Disable**.

**Note:** Advanced Security must be activated through the Xfinity app.


## Xfinity-WIFI-Hotspot
---
This article explains how to manage the Xfinity WiFi hotspot that’s available on your residential Xfinity Gateway and where it can be used.

Your Xfinity Wireless Gateway broadcasts an additional “**xfinitywifi**” network signal, creating an extension of the Xfinity WiFi network right in your home.We designed this feature for you and this service is completely separate from your secure, private home WiFi network and allows guests to sign in and connect without sharing your secure network password. Your Home Hotspot is included with your service at no additional charge.To learn how to enable or disable your Xfinity WiFi Home Hotspot, please read the instructions below.

**Notes:**

-   Xfinity WiFi hotspots are available at no extra charge if you rent an [Xfinity Gateway](https://www.xfinity.com/support/articles/broadband-gateways-userguides).
-   Find your Gateway make and model by looking at the UPC seal located on the bottom or back of your device.
-   We encourage you to keep the Xfinity WiFi Home Hotspot feature enabled, as it allows more people to enjoy the benefits of Xfinity WiFi.

### Enable or Disable the Xfinity WiFi Home Hotspot Feature in the Xfinity App

1.  Go to the Xfinity app (available to download for free from Apple App Store or Google Play).
2.  Sign in to your account using your Xfinity ID and password.
3.  Tap **WiFi**.
4.  Tap **View WiFi equipment**.
5.  Tap **Advanced settings**.
6.  From there, tap **Xfinity WiFi hotspot network**.
7.  Slide the toggle to the right to enable your public hotspot and to the left to disable it.

### Enable or Disable the Xfinity WiFi Home Hotspot Feature in Your Account

1.  Go [Here](https://customer.xfinity.com/#/settings/security/hotspot).
2.  Sign in to your account using your Xfinity ID and password.
3.  Click **Turn Off** or **Turn On** to disable or enable your public hotspot.
    -   **Note:** This is turned on by default.
4.  Confirm your selection.
5.  You'll see a confirmation message.  
    ![Screenshot of the hotspot confirmation message](https://secure.xfinity.com/anon.comcastonline2/support/help/faqs/xfinity_wifi/HOW9107_3152017_03.png)
    -   **Message:** _"Your hotspot has been disabled. Please allow 24 hours for this change to take effect in My Account and your Wireless Gateway."_

**Notes:**

-   If you're presented with information about Xfinity WiFi but don't see the option to **Turn On** or **Turn Off**, you have a device that is not eligible for this feature and is not broadcasting a public hotspot signal.

To learn more about the home hotspot feature, to find a hotspot near you, or to download the Xfinity WiFi Hotspots app, visit [xfinity.com/wifi](https://xfinity.com/wifi).

## Docker-Configs
---
### Pi-Hole Yaml
```yaml
version: "3"

# More info at https://github.com/pi-hole/docker-pi-hole/ and https://docs.pi-hole.net/
services:
  pihole:
    container_name: pihole
    image: pihole/pihole:latest
    # For DHCP it is recommended to remove these ports and instead add: network_mode: "host"
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "67:67/udp" # Only required if you are using Pi-hole as your DHCP server
      - "80:80/tcp"
    environment:
      TZ: 'America/Los_Angeles'
      WEBPASSWORD: 'D4niel1546423!'
    # Volumes store your data between container upgrades
    volumes:
      - '/data/docker/pihole:/etc/pihole'
      - '/data/docker/pihole/etc-dnsmasq.d:/etc/dnsmasq.d'
    #   https://github.com/pi-hole/docker-pi-hole#note-on-capabilities
    cap_add:
      - NET_ADMIN # Required if you are using Pi-hole as your DHCP server, else not needed
    restart: unless-stopped
```
### Nginx Yaml
```yaml
version: '3'
services:
  app:
    restart: always
    # https://nginxproxymanager.com
    image: 'jc21/nginx-proxy-manager:latest'
    container_name: nginx-proxy-manager
    ports:
      # Public http port
      - '80:80'
      # Public admin web interface
      - '81:81'
      # Public https port
      - '443:443'
    environment:
      - TP_HOTIO=true
    # Persistant volumes for relivant data.
    volumes:
      - /data/docker/nginx/data:/data
      - /data/docker/nginx/letsencrypt:/etc/letsencrypt
```
---
### Vaultwarden Yaml (Bitwarden)
```yaml
version: '3.7'

services:
#https://github.com/dani-garcia/vaultwarden
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    ports:
      - 8082:80
      - 3012:3012
    volumes:
      - /home/timatteo/vaultwarden:/data
    restart: always
    environment:
      WEBSOCKET_ENABLED: 'true'
      SIGNUPS_ALLOWED: 'true'
      ADMIN_TOKEN: 'xeXzP@n%mBnQRUdcSP%oFBZb2ezvtLjwkk5!*9sR'
      # SMTP_HOST: 'Set This'
      # SMTP_FROM: 'Set This'
      # SMTP_PORT: '1025'
      # SMTP_SSL: 'false'
      # SMTP_EXPLICIT_TLS: 'false'
      # SMTP_SECURITY: 'starttls'
      # SMTP_USERNAME: 'Set This'
      # SMTP_PASSWORD: 'Set This'
      # SMTP_AUTH_MECHANISM: 'Login'


#https://github.com/Bruceforce/vaultwarden-backup     
  vaultwarden-backup:
    image: bruceforce/bw_backup:latest
    container_name: vaultwarden-backup
    restart: always
    depends_on:
      - vaultwarden
    volumes:
      - /data/docker/vaultwarden/backup:/data
      - /data/docker/vaultwarden/backup:/backup
      - /data/docker/vaultwarden/backup:/etc/timezone:ro
      - /data/docker/vaultwarden/backup:/etc/localtime:ro
    environment:
      - DB_FILE=/data/db.sqlite3
      - BACKUP_FILE=/backup/backup.sqlite3
      - BACKUP_FILE_PERMISSIONS=700
      - VW_DATA_FOLDER=/data
      - BACKUP_DIR=/backup
      - BACKUP_ADD_CONFIG_JSON=true
      - CRON_TIME=0 1 * * *
      - TIMESTAMP=true
      - DELETE_AFTER=60
      - UID=0
      - GID=0
```
---
### Plex Yaml
```yaml
version: "2.1"
services:
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - VERSION=docker
      - PLEX_CLAIM=claim-JWDMgnxtgXhyBT2TGpwf
    volumes:
      - /data/docker/plex:/config
      - /data/docker/tvshows:/tv
      - /data/docker/movies:/movie
      - /data/docker/anime:/anime
    restart: unless-stopped
```
---
### Sonarr, Radarr, Lidarr Yaml
```yaml
version: "2.1"
services:
  sonarr:
  # https://hub.docker.com/r/linuxserver/sonarr
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Los_Angeles
    volumes:
      - /data/docker/sonarr:/config
      - /data/docker/tvshows:/tv #optional
      - /data/docker/qbittorent/downloads:/downloads #optional
    ports:
      - 8989:8989
    restart: unless-stopped
    
    
  radarr:
  # https://hub.docker.com/r/linuxserver/radarr
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Los_Angeles
    volumes:
      - /data/docker/radarr:/config
      - /data/docker/movies:/movies #optional
      - /data/docker/qbittorent/downloads:/downloads #optional
    ports:
      - 7878:7878
    restart: unless-stopped 
    
    
  lidarr:
  # https://hub.docker.com/r/linuxserver/lidarr
    image: lscr.io/linuxserver/lidarr:latest
    container_name: lidarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Los_Angeles
    volumes:
      - /data/docker/lidarr:/config
      - /data/docker/Music:/music #optional
      - /data/docker/qbittorent/downloads:/downloads #optional
    ports:
      - 8686:8686
    restart: unless-stopped
```
---
### Jackett Yaml
```yaml
version: "2.1"
services:
  jackett:
  # https://hub.docker.com/r/linuxserver/jackett
    image: lscr.io/linuxserver/jackett:latest
    container_name: jackett
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Los_Angeles
      - AUTO_UPDATE=true #optional
      - RUN_OPTS=<run options here> #optional
    volumes:
      - /data/docker/jackett:/config
      - /data/docker/qbittorent/downloads:/downloads
    ports:
      - 9117:9117
    restart: unless-stopped

  flaresolverr:
    # DockerHub mirror flaresolverr/flaresolverr:latest
    # https://github.com/FlareSolverr/FlareSolverr
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - LOG_LEVEL=${LOG_LEVEL:-info}
      - LOG_HTML=${LOG_HTML:-false}
      - CAPTCHA_SOLVER=${CAPTCHA_SOLVER:-none}
    ports:
      - "${PORT:-8191}:8191"
    restart: unless-stopped
```
---
### qBittorrent + VPN Yaml
```yaml
#https://github.com/qdm12/gluetun
version: '3'
services:
  gluetun:
    image: qmcgaw/gluetun
    container_name: gluetun
    cap_add:
      - NET_ADMIN
    network_mode: bridge
    ports:
      - '6881:6881'
      - '6881:6881/udp'
      - '8085:8085'
    volumes:
      - '/data/docker/gluetun:/gluetun'
    environment:
      - OPENVPN_USER=<Change me>
      - OPENVPN_PASSWORD=<Change me>
      - VPNSP=protonvpn
      - TZ=America/Los_Angeles
      - SERVER_COUNTRIES=<Change me>
    restart: always
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent
    container_name: qbittorrent
    network_mode: 'service:gluetun'
    environment:
      - PUID=1000
      - PGID=1001
      - TZ=America/<Change me>
      - WEBUI_PORT=8085
    volumes:
      - '/data/docker/qbittorrent/downloads:/downloads'
      - '/data/docker/qbittorrent:/config'
      - '/etc/localtime:/etc/localtime:ro'
    depends_on:
      - gluetun
    restart: always
```
---