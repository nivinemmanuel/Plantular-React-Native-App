#Accessing a text file - www.101computing.net/mp3-playlist/

file = open("playlist.txt","r")

#Repeat for each song in the text file
for line in file:
  
  #Let's split the line into an array called "fields" using the ";" as a separator:
  fields = line.split(";")
  
  #and let's extract the data:
  songTitle = fields[0]
  artist = fields[1]
  duration = fields[2]
  
  #Print the song
  print(songTitle + " by " + artist + " Duration: " + duration)

#It is good practice to close the file at the end to free up resources   
file.close()