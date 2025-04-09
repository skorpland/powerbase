use std::process::Command;

use assert_cmd::prelude::*;
use predicates::prelude::*;

#[test]
fn integration_test_rule002() {
    let mut cmd = Command::cargo_bin("power-mdx-lint").unwrap();
    cmd.arg("tests/rule002/rule002.mdx")
        .arg("--config")
        .arg("tests/rule002/power-mdx-lint.config.toml");
    cmd.assert()
        .failure()
        .stdout(predicate::str::contains("2 errors"));
}
