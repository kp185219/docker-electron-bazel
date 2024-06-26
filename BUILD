package(default_visibility=["//visibility:public"])

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")
load("@io_bazel_rules_docker//container:container.bzl", "container_image")

nodejs_binary(
    name = "iam-test_client_electron",
    entry_point = "//:index.js",
	data = [
		":index.js",
		"@npm//@electron/fuses",
	],
)

nodejs_image(
    name = "iam-test_client_electron_image",
    entry_point = "//:index.js",
	include_node_repo_args = False,
	data = [":index.js", "@npm//@electron/fuses"],
)

container_image(
    name = "test-client-electron",
    base = ":iam-test_client_electron_image",
    tags = ["manual"],
)
