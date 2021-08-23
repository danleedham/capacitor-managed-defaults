import Foundation
import Capacitor

@objc(ManagedStoragePlugin)
public class ManagedStoragePlugin: CAPPlugin {
    private let implementation = ManagedStorage()

    @objc func getManaged(_ call: CAPPluginCall) {
        guard let key = call.getString("key") else {
            call.reject("Must provide a key")
            return
        }

        let value = implementation.getManaged(by: key)

        call.resolve([
            "value": value as Any
        ])
    }
}
