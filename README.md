# Aqua-Jr

### First Steps

Initially, clone the repository:

```
git clone https://github.com/citi-onboarding/Aqua-Jr.git
```

## GitHub

### Branches
They can be:
+ master
+ develop
+ feature
+ bugfix
+ hotfix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feature(name-of-feature) : What was done…”._

Must be simple and show briefly what you just did.

- Ex: `git commit -m “Feature(issue_name) : Added ...”`
- Ex: `git commit -m “Bugfix(issue_name) : Changed ...”`
- Ex: `git commit -m “Hotfix(issue_name) : Fix ...”`

### Pull Requests
1. _commit_ the changes on your branch
2. Go to the original branch (develo) with `git checkout develop`
3. Run `git push origin "your-branch"`

Use this template for the pull request body:
```
## What I did:
- First thing I did...
- Second thing I did...
## How to test:
1. First step to execute the project...
2. Second step to execute the project...
```

```markdown
Made with `markdown` and love by CITi
```
