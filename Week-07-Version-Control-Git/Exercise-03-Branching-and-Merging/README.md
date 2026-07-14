# Exercise 03 - Branching and Merging

## Objective

This exercise demonstrates the use of Git branches for parallel development and the process of merging changes back into the main branch.

## Prerequisites

- Git for Windows
- Git Bash
- Visual Studio Code
- Existing Git repository

## Folder Structure

```
Exercise-03-Branching-and-Merging
│
├── welcome.txt
├── output1.png
├── output2.png
├── output3.png
├── output4.png
├── output5.png
├── output6.png
├── output7.png
├── output8.png
├── output9.png
└── README.md
```

## Commands Executed

### Check Repository Status

```bash
git status
```

### Stage and Commit

```bash
git add .
git commit -m "Added welcome file"
```

### Create Branch

```bash
git branch GitNewBranch
```

### View Available Branches

```bash
git branch
```

### Switch to Branch

```bash
git switch GitNewBranch
```

### Commit Changes in Branch

```bash
git add .
git commit -m "Updated welcome file in GitNewBranch"
```

### Switch Back to Main Branch

```bash
git switch main
```

### Compare Branches

```bash
git diff main GitNewBranch
```

### Merge Branch

```bash
git merge GitNewBranch
```

### View Commit History

```bash
git log --oneline --graph --decorate --all
```

### Delete Branch

```bash
git branch -d GitNewBranch
```

## Output

### Initial Commit

![Output 1](output1.png)

### Branch Creation

![Output 2](output2.png)

### Switched to New Branch

![Output 3](output3.png)

### Commit on Feature Branch

![Output 4](output4.png)

### Main Branch Before Merge

![Output 5](output5.png)

### Difference Between Branches

![Output 6](output6.png)

### Successful Merge

![Output 7](output7.png)

### Git Commit History

![Output 8](output8.png)

### Branch Deleted

![Output 9](output9.png)

## Learning Outcomes

- Created and managed Git branches.
- Switched between multiple branches.
- Committed changes independently in a feature branch.
- Compared differences between branches.
- Merged changes into the main branch.
- Visualized commit history using Git log.
- Deleted merged branches to maintain a clean repository.