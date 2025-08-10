<?php
namespace modules;

use Craft;
use yii\base\Module;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ViteTwigExtension extends AbstractExtension
{
    private ?array $manifest = null;

    public function getFunctions(): array
    {
        return [
            new TwigFunction('viteAsset', [$this, 'viteAsset']),
        ];
    }

    public function viteAsset(string $file): string
    {
        if ($this->manifest === null) {
            $manifestPath = Craft::getAlias('@webroot') . '/dist/.vite/manifest.json';
            $this->manifest = json_decode(file_get_contents($manifestPath), true);
        }

        return '/dist/' . ($this->manifest[$file]['file'] ?? $file);
    }
}

class ViteModule extends Module
{
    public function init()
    {
        parent::init();
        Craft::$app->view->registerTwigExtension(new ViteTwigExtension());
    }
}