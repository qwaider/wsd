#!/usr/bin/env bash

set -o nounset # Error on referencing undefined variables, shorthand: set -n
set -o errexit # Abort on error, shorthand: set -e

lmi="data/training/45g-lmi-test-both.csv"
ddt_t="data/training/ddt-mwe-45g-8m-thr-agressive2-cw-e0-N200-n200-minsize5-isas-cmb-313k-hyper-filter-closure-test-python.csv"
ddt_c="data/training/P80_T0_Ecount_N0_Htfidf_clusters-test-cosets-2.csv"

scripts/build_model.sh "$lmi" "$ddt_t" "$ddt_c"
