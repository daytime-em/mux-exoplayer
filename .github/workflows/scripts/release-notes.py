# release-notes.py
# Script that generates release notes for a pull request based off the commit names
#  and adds them to the pull request description

from sys import argv

def getCommits():
  return None


def main():
  print("Creating release notes for PR " + argv[1])
  getCommits()

  return -1

main()