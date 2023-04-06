import{_ as e,p as a,q as t,a1 as n}from"./framework-5866ffd3.js";const s={},i=n(`<h1 id="data-management" tabindex="-1"><a class="header-anchor" href="#data-management" aria-hidden="true">#</a> Data Management</h1><p>This section covers how users should manage their data in order to maintain data organization across the entire server, and encourage collaboration for datasets which are being used by multiple people.</p><p>In short, users are given two home directories, one directly in the /home directory, and another in the home/data directory. The /home directory lives on the SSD, which is fast but has limited space of 2TB, and the /home/data directory lives on the larger drives giving a total storage space of 30TB. For data processing, users should exclusively use the /home/data directory.</p><h2 id="shared-dataset-management" tabindex="-1"><a class="header-anchor" href="#shared-dataset-management" aria-hidden="true">#</a> Shared Dataset Management</h2><p>Users should aim to store all raw datasets and datasets processed by standard pipelines (sequencing, peak-finding, etc.) in the /home/data/Shared/shared_datasets directory. The general directory structure should be as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shared_datasets
├── name of assay
│   ├── data
│       ├── For externally acquired datasets, SRP/SRR/GEO number
│       └── For internally created datasets, some unique identifier of the
            experiment, the username of the person who created it, and the 
            date it was created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>An example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shared_datasets
├── sc_atac_seq
│   ├── data
│       ├── SRP299892
│       └── dko_nlaszik_022323
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code-and-output-data" tabindex="-1"><a class="header-anchor" href="#code-and-output-data" aria-hidden="true">#</a> Code and Output Data</h2><p>Data processing can be done in a user&#39;s /home/data directory, organizing things as they so choose, but if they would prefer to do it in the /home/data/Shared/shared_datasets directory, please create a directory with your username in the directory following this example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shared_datasets
├── sc_atac_seq
│   ├── nlaszik
│   ├── aqphan
│   ├── atrinh
│   └── etc...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permissions-management" tabindex="-1"><a class="header-anchor" href="#permissions-management" aria-hidden="true">#</a> Permissions Management</h2><p>A script runs every 10 minutes which updates the ownership of the entire /home/data/Shared directory to be downinglab:TeamAvatar!</p>`,13),d=[i];function r(o,l){return a(),t("div",null,d)}const h=e(s,[["render",r],["__file","index.html.vue"]]);export{h as default};
