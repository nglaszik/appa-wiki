import os

# a script which automatically creates the readme file for environment modules

# python /home/downinglab/website/appa-wiki/update_environment_modules.py

path_modulefiles = '/opt/modules/modulefiles'
path_modulefiles_readme = '/home/downinglab/website/appa-wiki/docs/environment_modules/README.md'
modulefiles_readme_text = '''# Environment Modules

This section covers use of Environment Modules, which allow users to run the software installed on the server.

To view backend management of Environment Modules, visit [Backend Management](/backend_management/README.md).

Environment modules allow for easy management of different versions of software on the server.

If you would like for additional environment modules to be installed, please contact Nandor on discord or at nlaszik@uci.edu.

## Loading Modules
Users can load modules with the following command in the shell:

```shell
module load module_name/version_number
```

## Viewing Available Modules
Users can view modules currently available on the system with the following command in the shell:

```shell
module avail
```

## Available Modules
Available modules are also listed in this documentation.'''

for directory in os.listdir(path_modulefiles):

	modulefiles_readme_text += f'\n\n### {directory}'
	
	for subdirectory in os.listdir(os.path.join(path_modulefiles, directory)):
		
		modulefiles_readme_text += f'\n{subdirectory}'
		
with open(path_modulefiles_readme, 'w') as outfile:
	outfile.write(modulefiles_readme_text)
	