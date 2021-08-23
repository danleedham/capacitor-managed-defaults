import Foundation

public class ManagedStorage {
    
    private var defaults: UserDefaults {
        return UserDefaults.standard
    }

    public func getManaged(by key: String) -> String? {
        return String(describing: defaults.dictionary(forKey: "com.apple.configuration.managed")?[key] ?? "undefined")
    }

}
