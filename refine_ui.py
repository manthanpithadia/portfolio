import os

def update_ui_in_folder(path):
    replacements = {
        # Lighten dark elements to keep theme pure light
        'bg-slate-900': 'bg-[#1a365d] bg-opacity-5 backdrop-blur-sm border border-primary/20 shadow-sm text-slate-800', # Soften harsh blacks into beautiful frosted blue-tints, wait, text-white is often paired, I'll handle that via text-white replacement below
        'text-white': 'text-slate-800', 
        # But wait, button texts need to be white if button is primary!
    }

    # A better approach: carefully target specific blocks we know exist based on our greps.
    exact_replacements = {
        # Hero sections replacing dark gradient with light elegant gradient 
        'rgba(17, 26, 33, 0.9) 0%, rgba(17, 26, 33, 0.2)': 'rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4)',
        # Turn heavy dark blocks into premium translucent light blocks
        'bg-slate-900 p-6 rounded-xl text-white': 'bg-white border border-gray-100 p-6 rounded-xl premium-shadow',
        'p-8 bg-slate-900 rounded-2xl text-white': 'p-8 bg-gradient-to-br from-white to-slate-50 border border-gray-100 shadow-xl rounded-2xl text-slate-800',
        'bg-slate-900 text-white': 'bg-primary/5 text-slate-800 border border-primary/10',
        'bg-slate-900': 'bg-slate-100',
        'text-white text-4xl': 'text-slate-900 text-4xl', 
        'text-slate-200 text-lg': 'text-slate-600 text-lg',
        'text-slate-300': 'text-slate-600',
        '<strong className="text-white">': '<strong className="text-slate-900">',
        'bg-slate-50': 'bg-white/60 backdrop-blur-md',
        '<section className="mb-20': '<section className="mb-20 animate-fade-in',
        '<section className="mb-16"': '<section className="mb-16 animate-fade-in"',
        '<div className="bg-primary p-6 rounded-xl text-white">': '<div className="bg-gradient-to-br from-primary to-primary-light p-6 rounded-xl text-white premium-shadow">',
        'text-slate-900 md:text-white': 'text-slate-900'
    }

    for root, _, files in os.walk(path):
        for file in files:
            if file.endswith('.jsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                original = content
                for old, new in exact_replacements.items():
                    content = content.replace(old, new)

                if content != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated {file}")

update_ui_in_folder('src/pages')
update_ui_in_folder('src')
