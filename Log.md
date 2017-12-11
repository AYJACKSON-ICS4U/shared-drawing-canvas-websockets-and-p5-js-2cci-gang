## node server.js Log

### Day 1
We started the day by watching the first of Dan Shiffman's shared canvas videos. We understand that the goal of the project is going to be to connect 2 people, 2 windows for the sake of simplicity to a server using 2 different windows, so that when edits are made on one person's computer the the sketch run on the computer, they are relayed to the other person's computer via their socket. The server program is going to be written using node.js. Node.js will ultimately host the sketch made using p5.js, and p5 manager. So, obviously, we started by downloading node.js and p5 manager onto the command line using the lines of code "npm -g install p5-manager" and simply going to the node website. After this, we used p5 manager in the command line to create a new collection with an index, an empty sketch, and libraries. Inside of this collection, we also made a new file called server.js. to put all of our server code inside. Into which, we put the line of code "console.log("My socket server is running");" in order to confirm that it is indeed running when we run the server from the command line using "node server.js".

### All Other Days Combined
While the above process was running on Timothy's computer, the rest of us were all struggling to get this working. As explained in the _Issues_ tab of this repository, Cooper and Anees couldn't even get p5 manager running after Day 1. Due to these computer errors, and Carter being absent due to sickness, we all followed after Timothy on his computer which worked. After this, we ran into many, **MANY** errors. Examples are that after the server was successfully running, the server did not display that there was a new connection if someone connected to the server. This message was not being shown and slowed our progress for many work periods. After taking a detailed look at Dan Shiffman's video, it turns out we had one incorrect line of code. Another bug we encountered was that the Nature of Code Sketch was not running properly, and in fact, we never found the solution to that challenge, so we switched to a different Nature of Code sketch and that one worked just fine. Sometimes, there are multiple ways to get to the same solution. After a couple of other errors and issues, the tab on the left finally displayed on the right tab as well, and we're not exactly sure what we changed and why it worked, but it worked and we seem to have the same code as Dan Shiffman.

The reason this log file isn't extremely detailed is due to the fact that after the first day of work, this assignment became a huge mess, and we were so confused that we can't even explain exactly what happened.

Overall, we seem to have gotten it working, and the many files on this GitHub repository detail what we used to get all this working.





