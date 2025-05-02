// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "CrossUIKitDemo",
    platforms: [
        .iOS(.v15)
    ],
    products: [
        .executable(name: "CrossUIKitDemo", targets: ["CrossUIKitDemo"])
    ],
    dependencies: [
        .package(path: "../../")  // Local path to CrossUIKit package
    ],
    targets: [
        .executableTarget(
            name: "CrossUIKitDemo",
            dependencies: ["CrossUIKit"],
            path: "Sources"
        )
    ]
)