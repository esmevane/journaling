# Journaling

Journaling is a distributable system of tools meant to help organize and collaborate on markdown files.

## Why?

A lot of pretty cool CMSs out there are either cumbersome to set up or require users commit to business-level relationships in order to use GUI tools.  That's a little rough to devote time to when you just want to write something quickly, and get it viewable by friends.

### Why not google docs, or other related things?

The problem with these is centralization and ownership.  You should have ownership of your work, at least to a certain enforceable degree.  To compound that, a lot of the tools out there don't embrace plain-text friendly formats, like Markdown.

### OK, just use a blog platform - Ghost is nice and uses Markdown.

Yes it is, but that's a completely different purpose than note sharing.  By coupling up our systems to a blog platform we'd be accepting the baked in constraints of how data is stored, how the platform is distributed and served, and ultimately agreeing that we didn't have any ideas of our own.

### It kind of sounds like a wiki.

That's definitely a useful perspective.  There are so many amazing things about wikis and we'd be total fools not to learn from them.  Interactive work, versioning, communal consensus building, all of these things are huge but worthwhile features.

The truth is that wikis _so far_ are usually an interface coupled to an implementation.  That means the way they work is locked in to their user interface.  That's one of those things that's easy to say but hard to code your way out of.

In a lot of cases the way something works can be used to build a feature set, and it'll be less expensive overall to reimplement those features from scratch using a new approach under the hood.  This is probably one of those cases.

### Why didn't I name it sojourn?

Seriously I've had the name sojourn for a long, long time - and its latest incarnation as of the time of this writing has a markdown editor.  What is my problem?

Always time to change names later, I guess.

## Overview

Journalism is very much in its infancy.  This overview sort of describes what we hope to happen, eventually, but none of this is set in stone (or developed, for that matter).

### Roles

In order to keep our stories focused on the actual consumers of each component, we want to have an exact idea of the story beneficiaries.  The roles below are probably not comprehensive, but hopefully they communicate a lot about the five minutes of brainstorming which went into conceptualizing this project.

* `Hosts` - These users can stand up journaling services on machines
* `Owners` - These are users who own an installation, and have owner tokens
* `Authors` - These are users who have been granted author tokens
* `Editors` - These are users who have been granted editorial tokens
* `User` - This is an ID'd token which carries other assigned tokens
* `Dashboard user` - This is someone using the Dashboard interface

### Components

In order to make sure we don't create a highly coupled system, but instead one which helps its users with deployment and distribution, we want to neatly divide top level responsibilities into reusable bricks of code.  Here's the first blush conceptual layout of the component structure:

* `Core` - This is the basic logic of the system, and includes data tracking
* `HTTP Server` - This component defines an external HTTP API
* `Socket Server` - This component defines an external socket API
* `Service` - This component defines a linux service which runs the HTTP API
* `Client` - This is a HTTP client which can consume the HTTP API
* `CLI` - This is a CLI which uses the `Client`
* `Dashboard` - This is a configurable dashboard, also known as the Endgame!

The `Dashboard` is really the net outcome out of all of this.  The idea here is that folks can use the Dashboard app (a static app) to control any number of remote content repos, and manage distributed work on those repos.

To the end user, this has to be a pretty simple experience.  But it needs to be robust in some areas, such as fault tolerance, connection management, and most importantly the Markdown editing experience.

### Stories

#### A host can start a server with custom host and port bindings
#### A dashboard user should be able to manage connections to servers
#### Dashboard users should be able to see other users viewing content
#### All changes should be undoable in perpetuity
#### An owner token can get full permissions to distribute and copy
#### Authors can approve or decline all content submissions
#### Articles can be free-form and auto-accept all content submissions
#### Articles can have namespaces, which show as URLs
#### Articles can link to other articles
#### Articles can be displayed in content regions
#### Dashboard users can control article styles
#### Authors can implement custom article styles
#### Article styles can be made public, or manually shared
#### Editors can revert or approve third party changes
#### Nothing is permanent
#### A server has a list of all mirrored content
#### Dashboard users can download ePub, mobi and PDF versions of content
#### CLI users can download ePub, mobi and PDF versions of content
#### Server users can create archive editions of their content
#### Server users can create archive books of their content

## License

Licensed 2017, MIT, Joseph McCormick.  [More details here](LICENSE.md)

## Contributing

Submit any issues [here](https://github.com/esmevane/journaling/issues) - please take note of the [code of conduct](CODE_OF_CONDUCT.md) before submitting any issues or pull requests.

To create a pull request:

* Fork the repository
* Create a local feature branch of your changes
* Please provide tests
* Submit your local feature branch vs. this repository as a pull request

## Contact

Feel free to contact me at any point if you have questions or suggestions, or just want to talk about journaling!
