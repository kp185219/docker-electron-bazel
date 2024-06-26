workspace(name = "electron-edge-id")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "af47f30e9cbd70ae34e49866e201b3f77069abb111183f2c0297e7e74ba6bbc0",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.47.0/rules_go-v0.47.0.zip",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.47.0/rules_go-v0.47.0.zip",
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains")


go_register_toolchains(version = "1.22.3")

http_archive(
    name = "bazel_gazelle",
    sha256 = "d3fa66a39028e97d76f9e2db8f1b0c11c099e8e01bf363a923074784e451f809",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.33.0/bazel-gazelle-v0.33.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.33.0/bazel-gazelle-v0.33.0.tar.gz",
    ],
)

http_archive(
    name = "build_stack_bazel_gazelle_debug",
    sha256 = "94abd91ca9e9a9950a84cdb3b6e4b3b033c2a5f3ea6b77acd51f7f7da3dbc69c",
    strip_prefix = "bazel-gazelle-debug-66315dd31d70f2e03d7dfaa310f4d549be6522e4",
    urls = ["https://github.com/stackb/bazel-gazelle-debug/archive/66315dd31d70f2e03d7dfaa310f4d549be6522e4.tar.gz"],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

http_archive(
    name = "bazel_features",
    sha256 = "d7787da289a7fb497352211ad200ec9f698822a9e0757a4976fd9f713ff372b3",
    strip_prefix = "bazel_features-1.9.1",
    url = "https://github.com/bazel-contrib/bazel_features/releases/download/v1.9.1/bazel_features-v1.9.1.tar.gz",
)

load("@bazel_features//:deps.bzl", "bazel_features_deps")

bazel_features_deps()


http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "5dd1e5dea1322174c57d3ca7b899da381d516220793d0adef3ba03b9d23baa8e",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.3/rules_nodejs-5.8.3.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()


load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "npm_install")

node_repositories(
    node_version = "18.0.0",
)

npm_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

#
# ###############################
# # DOCKER                      #
# ###############################
#
http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "7e0d45a79512cc8f0ef6274761eddba15cd8b1750828a319483dfad6596e0ea1",
    strip_prefix = "rules_docker-fc729d85f284225cfc0b8c6d1d838f4b3e037749",
    urls = ["https://github.com/bazelbuild/rules_docker/archive/fc729d85f284225cfc0b8c6d1d838f4b3e037749.zip"],
)

load(
    "@io_bazel_rules_docker//repositories:repositories.bzl",
    container_repositories = "repositories",
)

container_repositories()

load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")

container_deps()

load("@io_bazel_rules_docker//nodejs:image.bzl", "repositories")

repositories()
