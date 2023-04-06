# Data Management

This section covers how users should manage their data in order to maintain data organization across the entire server, and encourage collaboration for datasets which are being used by multiple people.

In short, users are given two home directories, one directly in the /home directory, and another in the home/data directory. The /home directory lives on the SSD, which is fast but has limited space of 2TB, and the /home/data directory lives on the larger drives giving a total storage space of 30TB. For data processing, users should exclusively use the /home/data directory.

## Shared Dataset Management

Users should aim to store all raw datasets and datasets processed by standard pipelines (sequencing, peak-finding, etc.) in the /home/data/Shared/shared_datasets directory. The general directory structure should be as follows:

```
shared_datasets
├── name of assay
│   ├── data
│       ├── For externally acquired datasets, SRP/SRR/GEO number
│       └── For internally created datasets, some unique identifier of the
            experiment, the username of the person who created it, and the 
            date it was created
```

An example:

```
shared_datasets
├── sc_atac_seq
│   ├── data
│       ├── SRP299892
│       └── dko_nlaszik_022323
```

## Code and Output Data

Data processing can be done in a user's /home/data directory, organizing things as they so choose, but if they would prefer to do it in the /home/data/Shared/shared_datasets directory, please create a directory with your username in the directory following this example:

```
shared_datasets
├── sc_atac_seq
│   ├── nlaszik
│   ├── aqphan
│   ├── atrinh
│   └── etc...

```

## Permissions Management

A script runs every 10 minutes which updates the ownership of the entire /home/data/Shared directory to be downinglab:TeamAvatar!
