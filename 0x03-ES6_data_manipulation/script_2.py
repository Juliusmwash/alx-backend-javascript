#!/usr/bin/python3

import os
import fileinput

# Get the current directory
current_directory = os.getcwd()

# Iterate over all files in the current directory
for filename in os.listdir(current_directory):
    if os.path.isfile(filename):
        # Initialize a flag to track if the previous line was deleted
        prev_line_deleted = False

        # Open the file in place for editing
        with fileinput.FileInput(filename, inplace=True) as file:
            for line in file:
                # Check if the line contains '#!/usr/bin/node'
                if line.startswith('#!/usr/bin/node'):
                    # Delete the line
                    prev_line_deleted = True
                    continue

                # Check if the previous line was deleted and this line is blank
                if prev_line_deleted and line.strip() == "":
                    prev_line_deleted = False
                    continue

                # Print the line
                prev_line_deleted = False
                print(line, end='')

