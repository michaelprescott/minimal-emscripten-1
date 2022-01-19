# minimal-emscripten-1
Minimalistic emscripten Project - 1

About
=====
A minimalistic emscripten project.


Getting Started
---------------

1. Install NVM (Node Version Manager)
    * https://github.com/nvm-sh/nvm#installing-and-updating
2. Install Node.js using NVM
    * `nvm install node`
3. From the root of the project directory
    * `npm install`
    * `npm run start`
4. Install using the emsdk
    * In another terminal, navigate into your workspace directory for tools or community projects.  For example:
        - /Users/yourusername/Projects/community
    * `git clone https://github.com/emscripten-core/emsdk.git`
    * You should now have a /Users/yourusername/Projects/community/emsdk directory
    * `cd emsdk`
    * `./emsdk install latest`
    * `./emsdk activate latest`
```
Resolving SDK alias 'latest' to '3.1.1'
Resolving SDK version '3.1.1' to 'sdk-releases-upstream-5ee64de9809592480da01372880ea11debd6c740-64bit'
Setting the following tools as active:
   node-14.18.2-64bit
   python-3.9.2-1-64bit
   releases-upstream-5ee64de9809592480da01372880ea11debd6c740-64bit

Next steps:
- To conveniently access emsdk tools from the command line,
  consider adding the following directories to your PATH:
    /Users/yourusername/Projects/community/emsdk
    /Users/yourusername/Projects/community/emsdk/node/14.18.2_64bit/bin
    /Users/yourusername/Projects/community/emsdk/upstream/emscripten
- This can be done for the current shell by running:
    source "/Users/yourusername/Projects/community/emsdk/emsdk_env.sh"
- Configure emsdk in your shell startup scripts by running:
    echo 'source "/Users/yourusername/Projects/community/emsdk/emsdk_env.sh"' >> $HOME/.zprofile
```

    * source ./emsdk_env.sh
    * echo 'source "/Users/yourusername/Projects/community/emsdk/emsdk_env.sh"' >> $HOME/.zprofile

    TODO: Untested, but consider adding the paths to your ~/.zshrc file instead of ~/.zprofile.  Research the difference, side-effects, and ease of maintainability.
5. `npm run start`

Configure Environment
=====================

Sublime Text
------------
When using Sublime Text plugins that require Node.js, and using NVM (Node Version Manager), Sublime cannot locate `node` to run plugins that depend on it.  To solve this problem:

1. Sublime > Preferences > Settings
2. Revise the Preferences.sublime-settings to specify the node_path. For example:

```
{
	"ignored_packages":
	[
		"Vintage",
	],
	"node_path": "/Users/yourusername/.nvm/versions/node/v17.3.1/bin/node"
}
```

REFERENCES
==========
https://emscripten.org/docs/getting_started/downloads.html
https://emscripten.org/docs/getting_started/Tutorial.html#tutorial
https://emscripten.org/docs/compiling/Deploying-Pages.html
https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html