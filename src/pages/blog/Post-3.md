---
layout: ../../layouts/BlogPosts.astro
href: /blog/Post-3
classes: contentBoxes 
title: Linux Commands
date: 24-06-2023
discription: An ongoing cheat sheet of linux commands that I often need or find usefull to reference every now and then.
body:
---

# Random Commands


(**_Below is a list of randomly useful Linux commands._**)

Add a Sudoer to the sudo file -`nano /etc/sudoers`

_Tab_ - The tab key auto completes with the closest reaming command 

_Notes:_ You can use multiple commands in one go, separate each command with ; to have them run all together. Separate them with && if you want the next command to run only after the first has fully completed.

`pwd` - (Print Working Directory) Find the absolute path of the current folder your in.

`cd` - Move to a different directory. Can be used without absolute path.

`ls` - List all folders and files in current directory.

`lsblk` - List all disks attached to the computer.

`lspci` - List all PCI, Serial, and BUS connections to the computer

`lsusb` - Lists all attached USB devices.

`top` - Shows the system resources like task manager in windows.
`htop` - This is similar but more customizable. Normally requires installation.

`history` - Shows a history of all commands typed in that session. use ! (called a bang) to select a command from the history

`man` - Don't know how to use a command? This command will explain how to use said command.

`-u` - Run a command as another user. example: `-u abc ./randomscript` (abc is the name of the user)

`whoami` - This will show you the logged in user of the system  

`exit` - Closes the connection if your using ssh.



# Files-And-Directory-manipulation
---
`cp` - Copy files from one place to another, file has to be in working directory, otherwise specify what file & where. 
 - Example `cp funnypic.jpg /home/username/pictures`

`mv` - Move files from one place to another.

`mkdir` - Creates a new directory in current working directory, otherwise specify where you want to create a new directory.

`rmdir` - Deletes chosen directory, only works with empty directory's

`rm` - Deletes chosen directory regardless of whats inside. add -r to remove folders with files inside.

`touch` - Lets you create a blank file of your choosing. Example `touch /home/username/web.html` This creates an empty html file called web.

`locate` -  Finds a file based on parameters. Example `locate school*work` this will report back any file with the words school and work in it. searches everywhere.

`find` - Works like locate but in a specific directory. Example `find /home -name name.jpg` This will locate the file name.jpg based on the name parameter and in the /home directory.

`grep` - Finds a word in a given file, or output command 
 - Example `grep blue notepad.txt` This will find the word blue in the text file.

`du` - Checks the size of the given directory.

`df` - The output of `df -H` will report how much space is used, available, percentage used, and the mount point of every disk attached to your system

`mount -t nfs 0.0.0.0:/mount/location/shared /mount/on/host/system` - mount assists in mounting both physical drives as well as remote drives. -t allows you to specify a type, in this case nfs, next is the location of the drive your mounting, in this case a server over the network. Then you specify the location you are sharing from that server, and then the location you want to mount it to on your physical host.

`diff` - Finds the difference between 2 files line by line, then reports back the difference.

`chmod` - This modifies the file or folders permissions value. To use the command you need to add permissions via a 3 digit number. example `chmod 777 .` would give read, write, and execute permissions to everyone on the computer for the folder your in.

`chown` - This modifies who owns the file or folder. To use this command you need to add which person and group you want to change that item to, example: `chown toast:homegroup .` This would set the ownership of the folder your in to toast and the group to home-group.

`zip , unzip` - Self explanatory.

`tar` , `tar -xf` - Tar allows you to compress/extract tar.gz files. Adding -x extracts and f specifies the file to extract.

`cat` - Short for Concatenate, this command reads out data from a file, or concatenates data onto another file, example: `cat /etc/passwd` displays all users on the computer.



# Networking
---
`ping` - Check your connection to any given IP address or website URL, reports back with information on transfer and ping.

`wget` - Downloads anything from the web for you, just enter the download URL.

`netstat` -  Shows current network port traffic.

`hostname -I` - Shows the IP address of the Debian server

`ip addr` - Lists out all network interfaces and details on them.

`nmap -s -sT -sU -sTU -O 0.0.0.0` - nmap is an open source tool for network exploration and security auditing. -s is for searching, -sT is for searching TCP connections, -sU is for searching UDP connections, and -sTU is for searching both at the same time. -O is for enabling host detection. Lastly, input what IP you want to search, or enter a host name. This will spit out what ports are in use and where.



# Terminal-multitasking
---
Pushd, Popd and all the commands with it use whats called the _Stack_ which we learned before is _FILO_ aka First In Last Out. It allows us to replace the `cd` command with the `pushd` command, giving us a stack of directories we can traverse. 
`pushd` , `pushd +n` - This command pushes the current directory your in onto the stack, adding another directory after this command traverses you to that directory at the same time as pushing your previous directory to the stack. Adding + followed by any n (number) will rotate the stack upwards by that amount, allowing you to traverse to directory that is farther into your stack.
 - `popd` , `popd +n` - This pops the top directory in the stack (aka index 0). Your index 0 is always your current working directory. Adding + followed by any n, you can directly pop off that directory from the stack.
 - `dirs` , `dirs -v` - This lists the directory stack you have built up. Adding the -v displays the list horizontally instead of inline and includes the index number of each directory you have saved in the stack.



# Terminal-Signals
---
Terminal signals are the multi-key commands you can send over the command line that allow you to control the session in different ways. An example of this would be pressing Ctrl+c to kill the current process your in.
`Ctrl + z` - This suspends/stops the current process, so if you need to exit your text editor to go read a file and then want to return back to that text editor again, this is how you would put that in the background.
`jobs` - This lists your current list of background jobs horizontally and indexed.
 - `fg` , `fg n` - (foreground) This moves the last job put into the background, while adding an n number will select the job if you have many in the background.
 - `bg` , `bg n` - (background) This sets any job in the jobs list to background mode instead of stopping it directly, that way if you need something to keep running while you do something else you can put it in the background.
 - `kill %n` - This kills whichever n number you select from your jobs list.



# Theme-commands-and-settings
---
`gsettings set org.gnome.desktop.interface cursor-theme <cursor_theme_name_here>` Applies a cursor theme by name.
`gsettings set org.gnome.desktop.interface icon-theme <icon_theme_name_here>` Applies an Icon theme by name
`gsettings set org.gnome.desktop.interface gtk-theme <gtk_theme_name_here>` Applies system wide theme by name

## To disable the GUI:

`sudo systemctl set-default multi-user.target   sudo reboot   `

## To re-enable the GUI:

`sudo systemctl set-default graphical.target   sudo reboot   `

