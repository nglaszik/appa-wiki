# Environment Modules

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
Available modules are also listed in this documentation.

### tools
gdc-client
cuda
icu
singularity

### languages
jdk
matlab
go
R
python

### libraries
OpenBLAS

### genomics
RSEM
bismark
trimgalore
cellranger
bustools
homer
bowtie2
STAR
igv
fastqc