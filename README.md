# galley-template

Use this template repo to get started with [Galley](https://github.com/twitter-fabric/galley/):

```console
$ npm install -g galley-cli
$ git clone https://github.com/twitter-fabric/galley-template.git
$ cd galley-template
$ galley run demo
```

### Using the template

You’ll need to symlink the Galleyfile.js from this directory to the root of your local source
repositories. Then, edit the Galleyfile to describe the services in your system. See the
[Galley README](https://github.com/twitter-fabric/galley/blob/master/README.md) for information on
the Galleyfile format.

You will want to commit this repo to your own team’s source control, then have your teammates
clone it, install galley-cli, and make the symlink.

### Updating galley

The `galley` CLI tool uses the galley NPM dependency from your Galleyfile directory’s package.json.
To upgrade to a new version of galley, run:

```console
$ npm install --save galley
$ npm shrinkwrap
```

And then check in the changes. The `galley` CLI tool automatically installs missing NPM dependencies
when it starts, so your teammates just need to pull this repo to get the upgrade.
