Start to monitor a directory if changes are made (Rename,New file,Deleted file)

log changes in the directory to a file. (And save it somewhere else)

    Find out what kind of log system I would like to use

Connect to FTP Server (Might keep the connection open)

    Think about bad connection and what errors can occour

Upload files to the server (Sync the directory with dir on FTP)
.. then delete the files locally (using fs module)

Close connection (Might keep the connection open)

---
Add GitIgnore to protect FTP credentials

---

Tasks :
Change directories on FTP server
Go through code and comment what you understand and what you don´t understand
Test the script with different events (rename file, delete file, dump file into folder etc.) to get an understanding of where the limits are (diff. situations)
Delete files after they have been uploadet