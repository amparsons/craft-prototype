<?php
use Craft;

function vite_asset(string $file): string
{
    static $manifest = null;
    if ($manifest === null) {
        $manifestPath = Craft::getAlias('@webroot') . '/dist/manifest.json';
        if (!file_exists($manifestPath)) {
            // Manifest not found, return original path (dev mode fallback)
            return '/dist/' . $file;
        }
        $manifest = json_decode(file_get_contents($manifestPath), true);
    }

    return '/dist/' . ($manifest[$file]['file'] ?? $file);
}