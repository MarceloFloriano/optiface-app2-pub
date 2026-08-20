import trimesh
import os

# Load the STL files
file_paths = [
    "YO_6_53_v2_CANAL_V - YO FA - VERVE.STL",
    "YO_7_53_V2_CANAL_V - YO FB - ZAPPY.STL",
    "YO_8_46_V2_CANAL_V - YO FC - JARVI.STL"
]

# Analyze each mesh
mesh_data = []
for path in file_paths:
    mesh = trimesh.load(path)
    bounds = mesh.bounds  # axis-aligned bounding box
    centroid = mesh.centroid
    extents = mesh.extents  # size in x, y, z
    mesh_data.append({
        "file": os.path.basename(path),
        "centroid": centroid,
        "bounds": bounds,
        "extents": extents
    })

import pandas as pd
import ace_tools as tools

df = pd.DataFrame(mesh_data)
print(df)
tools.display_dataframe_to_user(name="Análisis de Modelos STL", dataframe=df)