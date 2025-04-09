//
//  Powerbase.swift
//  UserManagement
//
//  Created by Guilherme Souza on 17/11/23.
//

import Foundation
import Powerbase

let powerbase = PowerbaseClient(
  powerbaseURL: URL(string: DotEnv.POWERBASE_URL)!,
  powerbaseKey: DotEnv.POWERBASE_ANON_KEY
)
